import { useEffect, useState } from 'react';
import styles from './DeviantArtGallery.module.css';

const formatDate = (rawDate) => {
  if (!rawDate) {
    return '';
  }

  const parsed = new Date(rawDate);
  if (Number.isNaN(parsed.getTime())) {
    return rawDate;
  }

  return parsed.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const DeviantArtGallery = ({ limit = 9 }) => {
  const [artworks, setArtworks] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(`/api/deviantart-gallery?limit=${limit}`);

        if (!response.ok) {
          throw new Error('Could not load DeviantArt gallery right now.');
        }

        const data = await response.json();
        setArtworks(Array.isArray(data.items) ? data.items : []);
      } catch (err) {
        setError(err.message || 'Could not load DeviantArt gallery right now.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, [limit]);

  if (error) {
    return <p className={styles.status}>{error}</p>;
  }

  if (isLoading) {
    return <p className={styles.status}>Loading gallery...</p>;
  }

  if (!artworks.length) {
    return <p className={styles.status}>No DeviantArt posts found yet.</p>;
  }

  return (
    <div className={styles.galleryGrid}>
      {artworks.map((artwork) => (
        <a
          key={artwork.link}
          href={artwork.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <img
            src={artwork.thumbnail}
            alt={artwork.title}
            loading="lazy"
            className={styles.thumbnail}
          />
          <div className={styles.meta}>
            <p className={styles.title}>{artwork.title}</p>
            <p className={styles.date}>{formatDate(artwork.pubDate)}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default DeviantArtGallery;
