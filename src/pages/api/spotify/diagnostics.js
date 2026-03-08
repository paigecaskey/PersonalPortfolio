const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOP_ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists?limit=8&time_range=short_term';

const getCredentials = () => ({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
});

const exchangeRefreshToken = async ({ clientId, clientSecret, refreshToken }) => {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const requestBody = new URLSearchParams();
  requestBody.append('grant_type', 'refresh_token');
  requestBody.append('refresh_token', refreshToken);

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: requestBody.toString(),
  });

  const body = await response.json();
  return {
    ok: response.ok,
    status: response.status,
    body,
  };
};

const checkSpotifyEndpoint = async (url, accessToken) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  let body = null;
  const raw = await response.text();
  if (raw) {
    try {
      body = JSON.parse(raw);
    } catch {
      body = raw;
    }
  }

  return {
    ok: response.ok,
    status: response.status,
    body,
  };
};

export default async function handler(req, res) {
  const credentials = getCredentials();
  const result = {
    env: {
      hasClientId: Boolean(credentials.clientId),
      hasClientSecret: Boolean(credentials.clientSecret),
      hasRefreshToken: Boolean(credentials.refreshToken),
    },
    tokenExchange: null,
    nowPlaying: null,
    topArtists: null,
  };

  if (!result.env.hasClientId || !result.env.hasClientSecret || !result.env.hasRefreshToken) {
    return res.status(400).json({
      ok: false,
      message: 'Missing Spotify credentials in .env.local',
      ...result,
    });
  }

  const tokenExchange = await exchangeRefreshToken(credentials);
  result.tokenExchange = {
    ok: tokenExchange.ok,
    status: tokenExchange.status,
    error: tokenExchange.body?.error || null,
    errorDescription: tokenExchange.body?.error_description || null,
    hasAccessToken: Boolean(tokenExchange.body?.access_token),
  };

  if (!tokenExchange.ok || !tokenExchange.body?.access_token) {
    return res.status(502).json({
      ok: false,
      message: 'Spotify token exchange failed',
      ...result,
    });
  }

  const accessToken = tokenExchange.body.access_token;
  const [nowPlaying, topArtists] = await Promise.all([
    checkSpotifyEndpoint(NOW_PLAYING_ENDPOINT, accessToken),
    checkSpotifyEndpoint(TOP_ARTISTS_ENDPOINT, accessToken),
  ]);

  result.nowPlaying = {
    ok: nowPlaying.ok,
    status: nowPlaying.status,
    summary: nowPlaying.status === 204
      ? 'No song currently playing (this is normal)'
      : nowPlaying.body?.item?.name || nowPlaying.body?.error?.message || null,
  };

  result.topArtists = {
    ok: topArtists.ok,
    status: topArtists.status,
    count: Array.isArray(topArtists.body?.items) ? topArtists.body.items.length : 0,
    firstArtist: topArtists.body?.items?.[0]?.name || null,
    error: topArtists.body?.error?.message || null,
  };

  const ok = result.tokenExchange.ok && result.topArtists.ok && (result.nowPlaying.ok || result.nowPlaying.status === 204);

  return res.status(ok ? 200 : 502).json({
    ok,
    message: ok ? 'Spotify integration is working' : 'Spotify integration check failed',
    ...result,
  });
}
