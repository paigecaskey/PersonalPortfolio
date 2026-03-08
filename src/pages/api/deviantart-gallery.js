const FEED_URL = 'https://backend.deviantart.com/rss.xml?type=deviation&q=by:paigecaskey';
const CACHE_TTL_MS = 45 * 60 * 1000;

let feedCache = {
  fetchedAt: 0,
  items: [],
};

const decodeEntities = (text = '') =>
  text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

const extractTag = (itemXml, tagName) => {
  const regex = new RegExp(`<${tagName}>([\\s\\S]*?)</${tagName}>`, 'i');
  const match = itemXml.match(regex);
  return match ? decodeEntities(match[1]) : '';
};

const extractThumbnail = (itemXml) => {
  const match = itemXml.match(/<media:thumbnail[^>]*url=["']([^"']+)["'][^>]*>/i);
  return match ? match[1].trim() : '';
};

const parseFeed = (xmlText) => {
  const itemMatches = [...xmlText.matchAll(/<item\b[\s\S]*?<\/item>/gi)];

  return itemMatches
    .map((match) => {
      const itemXml = match[0];
      return {
        title: extractTag(itemXml, 'title'),
        link: extractTag(itemXml, 'link'),
        pubDate: extractTag(itemXml, 'pubDate'),
        thumbnail: extractThumbnail(itemXml),
      };
    })
    .filter((item) => item.title && item.link && item.thumbnail);
};

export default async function handler(req, res) {
  const limitParam = Number.parseInt(String(req.query.limit || '9'), 10);
  const limit = Number.isFinite(limitParam) ? Math.max(1, Math.min(12, limitParam)) : 9;

  const isCacheFresh = Date.now() - feedCache.fetchedAt < CACHE_TTL_MS;
  if (isCacheFresh && feedCache.items.length) {
    return res.status(200).json({
      source: 'cache',
      fetchedAt: feedCache.fetchedAt,
      items: feedCache.items.slice(0, limit),
    });
  }

  try {
    const response = await fetch(FEED_URL, {
      headers: {
        Accept: 'application/rss+xml, application/xml, text/xml',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch DeviantArt RSS feed' });
    }

    const xmlText = await response.text();
    const items = parseFeed(xmlText);

    feedCache = {
      fetchedAt: Date.now(),
      items,
    };

    res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=300');

    return res.status(200).json({
      source: 'live',
      fetchedAt: feedCache.fetchedAt,
      items: items.slice(0, limit),
    });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to fetch DeviantArt gallery data' });
  }
}
