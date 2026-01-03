// pages/api/spotify/top-artist.js

export default async function handler(req, res) {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
    const TOP_ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists?limit=1&time_range=short_term';

    async function getAccessToken() {
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64'); 
        const requestBody = new URLSearchParams();
        requestBody.append('grant_type', 'refresh_token');
        requestBody.append('refresh_token', refresh_token);

        const response = await fetch(TOKEN_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Basic ${basic}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: requestBody.toString(),
        });

        return response.json();
    }

    try {
        const { access_token } = await getAccessToken();

        const response = await fetch(TOP_ARTISTS_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed to fetch top artist" });
        }

        const data = await response.json();
        if (!data.items || data.items.length === 0) {
            return res.status(204).json({ message: "No top artist found" });
        }
        const artist = data.items[0];
        return res.status(200).json({
            name: artist.name,
            imageUrl: artist.images[0]?.url || '',
            genres: artist.genres,
            spotifyUrl: artist.external_urls.spotify
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
