import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function TopArtist() {
  const [artist, setArtist] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopArtist = async () => {
      try {
        const response = await fetch('/api/spotify/top-artist');
        if (!response.ok) throw new Error('Failed to fetch');
        if (response.status === 204) throw new Error('No data');
        const data = await response.json();
        setArtist(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchTopArtist();
  }, []);

  if (error) return <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>;
  if (!artist) return <div style={{ textAlign: 'center' }}>Loading...</div>;

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 8 }}>
      <Image src={artist.imageUrl} alt={artist.name} width={80} height={80} style={{ borderRadius: '50%' }} />
      <div style={{ fontWeight: 'bold', fontSize: 18 }}>{artist.name}</div>
      <div style={{ fontSize: 14, color: '#666' }}>Top Spotify Artist</div>
    </div>
  );
}

export default TopArtist;
