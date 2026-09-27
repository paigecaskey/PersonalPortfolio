/* eslint-disable @next/next/no-img-element -- Spotify CDN art, small thumbnails */
import { useEffect, useState } from 'react';
import styles from './MusicTopArtists.module.css';

// "On repeat" strip of top Spotify artists for the redesigned music page.
// Hidden until data arrives, and stays hidden if the API errors or is empty.
const MusicTopArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/spotify/top-artists')
      .then((response) => (response.ok ? response.json() : { artists: [] }))
      .then((data) => {
        if (!cancelled) setArtists(Array.isArray(data.artists) ? data.artists : []);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!artists.length) return null;

  return (
    <div className={styles.strip}>
      <span className={styles.label}>on repeat:</span>
      <ol className={styles.list}>
        {artists.map((artist, index) => {
          const Tile = artist.spotifyUrl ? 'a' : 'span';
          const linkProps = artist.spotifyUrl
            ? { href: artist.spotifyUrl, target: '_blank', rel: 'noopener noreferrer' }
            : {};
          return (
            <li key={artist.id || artist.name}>
              <Tile
                className={styles.tile}
                title={`${index + 1}. ${artist.name}`}
                aria-label={`${index + 1}. ${artist.name}`}
                {...linkProps}
              >
                {artist.imageUrl ? (
                  <img src={artist.imageUrl} alt="" />
                ) : (
                  <span className={styles.initial}>{artist.name.charAt(0)}</span>
                )}
              </Tile>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default MusicTopArtists;
