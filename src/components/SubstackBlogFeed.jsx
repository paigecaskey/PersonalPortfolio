import React, { useEffect, useState } from 'react';
import styles from './SubstackBlogFeed.module.css';

const formatDate = (dateValue) => {
  if (!dateValue) return 'Unknown date';
  const parsedDate = new Date(dateValue);
  if (Number.isNaN(parsedDate.getTime())) return dateValue;

  return parsedDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const SubstackBlogFeed = ({ limit = 6 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/substack-feed?limit=${limit}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to load blog posts.');
        }

        if (isMounted) {
          setPosts(Array.isArray(data.posts) ? data.posts : []);
          setError('');
        }
      } catch (err) {
        if (isMounted) {
          setPosts([]);
          setError(err.message || 'Unable to fetch posts right now.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, [limit]);

  if (loading) {
    return <p className={styles.status}>Loading latest posts...</p>;
  }

  if (error) {
    return <p className={styles.status}>Could not load posts: {error}</p>;
  }

  if (!posts.length) {
    return <p className={styles.status}>No posts found yet.</p>;
  }

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <article key={post.link} className={styles.card}>
          {post.image ? (
            <a href={post.link} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
              <img src={post.image} alt={post.title} loading="lazy" className={styles.image} />
            </a>
          ) : null}

          <div className={styles.content}>
            <p className={styles.date}>{formatDate(post.date)}</p>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.preview}>{post.preview || 'Read the latest article on Substack.'}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className={styles.readMore}>
              Read More
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SubstackBlogFeed;
