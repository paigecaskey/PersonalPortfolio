const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const TOP_ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists?limit=8&time_range=short_term';

const getSpotifyCredentials = () => ({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
});

const getAccessToken = async (clientId, clientSecret, refreshToken) => {
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

  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(data.error_description || data.error || 'Failed to refresh Spotify token');
  }

  return data;
};

export default async function handler(req, res) {
  const { clientId, clientSecret, refreshToken } = getSpotifyCredentials();

  if (!clientId || !clientSecret || !refreshToken) {
    return res.status(500).json({
      error: 'Missing Spotify environment variables',
        expected: [
          'SPOTIFY_CLIENT_ID',
          'SPOTIFY_CLIENT_SECRET',
          'SPOTIFY_REFRESH_TOKEN',
      ],
    });
  }

  try {
    const { access_token: accessToken } = await getAccessToken(clientId, clientSecret, refreshToken);
    const response = await fetch(TOP_ARTISTS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 204) {
      return res.status(204).json({ artists: [] });
    }

    if (!response.ok) {
      const message = await response.text();
      return res.status(response.status).json({
        error: 'Failed to fetch top artists',
        spotifyStatus: response.status,
        spotifyBody: message,
      });
    }

    const data = await response.json();
    const artists = (data.items || []).slice(0, 8).map((artist) => ({
      id: artist.id,
      name: artist.name,
      imageUrl: artist.images?.[0]?.url || '',
      spotifyUrl: artist.external_urls?.spotify || '',
    }));

    return res.status(200).json({ artists });
  } catch (error) {
    return res.status(500).json({
      error: 'Spotify top artists request failed',
      detail: error.message,
    });
  }
}