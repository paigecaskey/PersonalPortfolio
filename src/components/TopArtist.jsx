
import React, { useState, useEffect } from 'react';

function TopArtist() {
  const [artist, setArtist] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/spotify/top-artist');
        if (!response.ok) throw new Error('Failed to fetch top artist');
        if (response.status === 204) throw new Error('No top artist');
        const data = await response.json();
        setArtist(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (error) return <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>;
  if (!artist) return <div style={{ textAlign: 'center' }}>Loading...</div>;

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 8 }}>
      {artist.imageUrl ? (
        <img src={artist.imageUrl} alt={artist.name} style={{ width: 80, height: 80, borderRadius: '50%' }} />
      ) : null}
      <div style={{ fontWeight: 'bold', fontSize: 18 }}>{artist.name}</div>
      <div style={{ fontSize: 14, color: '#666' }}>Top Spotify Artist</div>
    </div>
  );
}

export default TopArtist;
