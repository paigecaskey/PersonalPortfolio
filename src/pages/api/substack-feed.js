const FEED_URL = process.env.SUBSTACK_FEED_URL || 'https://YOURSUBSTACK.substack.com/feed';
const CACHE_TTL_MS = 45 * 60 * 1000;

let feedCache = {
  fetchedAt: 0,
  posts: [],
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

const stripHtml = (html = '') => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const getPreview = (itemXml) => {
  const description = extractTag(itemXml, 'description');
  const contentEncoded = extractTag(itemXml, 'content:encoded');
  const rawText = stripHtml(description || contentEncoded);
  if (!rawText) return '';
  return rawText.length > 120 ? `${rawText.slice(0, 117)}...` : rawText;
};

const extractImage = (itemXml) => {
  const enclosureMatch = itemXml.match(/<enclosure[^>]*url=["']([^"']+)["'][^>]*>/i);
  if (enclosureMatch) return enclosureMatch[1].trim();

  const mediaMatch = itemXml.match(/<media:content[^>]*url=["']([^"']+)["'][^>]*>/i);
  if (mediaMatch) return mediaMatch[1].trim();

  const imgTagMatch = itemXml.match(/<img[^>]*src=["']([^"']+)["'][^>]*>/i);
  if (imgTagMatch) return imgTagMatch[1].trim();

  return null;
};

const parseFeed = (xmlText) => {
  const itemMatches = [...xmlText.matchAll(/<item\b[\s\S]*?<\/item>/gi)];

  return itemMatches
    .map((match) => {
      const itemXml = match[0];
      return {
        title: extractTag(itemXml, 'title'),
        link: extractTag(itemXml, 'link'),
        date: extractTag(itemXml, 'pubDate'),
        preview: getPreview(itemXml),
        image: extractImage(itemXml),
      };
    })
    .filter((post) => post.title && post.link)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export default async function handler(req, res) {
  if (FEED_URL.includes('YOURSUBSTACK')) {
    return res.status(400).json({
      error: 'Set SUBSTACK_FEED_URL in .env.local (example: https://mypublication.substack.com/feed).',
    });
  }

  const limitParam = Number.parseInt(String(req.query.limit || '6'), 10);
  const limit = Number.isFinite(limitParam) ? Math.max(3, Math.min(6, limitParam)) : 6;

  const isCacheFresh = Date.now() - feedCache.fetchedAt < CACHE_TTL_MS;
  if (isCacheFresh && feedCache.posts.length) {
    return res.status(200).json({
      source: 'cache',
      fetchedAt: feedCache.fetchedAt,
      posts: feedCache.posts.slice(0, limit),
    });
  }

  try {
    const response = await fetch(FEED_URL, {
      headers: {
        Accept: 'application/rss+xml, application/xml, text/xml',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch Substack RSS feed.' });
    }

    const xmlText = await response.text();
    const posts = parseFeed(xmlText);

    feedCache = {
      fetchedAt: Date.now(),
      posts,
    };

    res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=300');

    return res.status(200).json({
      source: 'live',
      fetchedAt: feedCache.fetchedAt,
      posts: posts.slice(0, limit),
    });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to fetch Substack feed data.' });
  }
}
