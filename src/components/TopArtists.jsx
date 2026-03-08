import { useEffect, useState } from 'react';
import styles from './TopArtists.module.css';

const TopArtists = () => {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchTopArtists = async () => {
      try {
        const response = await fetch('/api/spotify/top-artists');

        if (response.status === 204) {
          setArtists([]);
          setIsLoaded(true);
          return;
        }

        if (!response.ok) {
          throw new Error('Could not load top artists right now.');
        }

        const data = await response.json();
        setArtists(Array.isArray(data.artists) ? data.artists : []);
      } catch (err) {
        setError(err.message || 'Could not load top artists right now.');
      } finally {
        setIsLoaded(true);
      }
    };

    fetchTopArtists();
  }, []);

  if (error) {
    return <p className={styles.feedback}>{error}</p>;
  }

  if (!isLoaded) {
    return <p className={styles.feedback}>Loading your top 8 artists...</p>;
  }

  if (!artists.length) {
    return <p className={styles.feedback}>No top artists available yet.</p>;
  }

  return (
    <ol className={styles.grid}>
      {artists.map((artist, index) => (
        <li className={styles.card} key={artist.id || `${artist.name}-${index}`}>
          <span className={styles.rank}>{index + 1}</span>
          {artist.imageUrl ? (
            <img src={artist.imageUrl} alt={artist.name} className={styles.image} />
          ) : (
            <div className={styles.imageFallback}>No Art</div>
          )}
          <p className={styles.name}>{artist.name}</p>
        </li>
      ))}
    </ol>
  );
};

export default TopArtists;