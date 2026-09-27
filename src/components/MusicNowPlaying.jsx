/* eslint-disable @next/next/no-img-element -- Spotify CDN art, tiny thumbnail */
import { useEffect, useState } from 'react';
import styles from './MusicNowPlaying.module.css';

const REFRESH_MS = 30 * 1000;

// Compact "now playing" card for the redesigned music page. Renders nothing
// until Spotify answers, and stays hidden if the API errors.
const MusicNowPlaying = () => {
  const [state, setState] = useState({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch('/api/spotify');
        if (cancelled) return;
        if (response.status === 204) {
          setState({ status: 'idle' });
          return;
        }
        if (!response.ok) throw new Error(`status ${response.status}`);
        const song = await response.json();
        if (!cancelled) setState({ status: 'playing', song });
      } catch {
        if (!cancelled) setState({ status: 'error' });
      }
    };

    load();
    const timer = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  if (state.status === 'loading' || state.status === 'error') return null;

  if (state.status === 'idle') {
    return (
      <div className={styles.card}>
        <span className={styles.label}>now playing</span>
        <span className={styles.idle}>nothing rn :)</span>
      </div>
    );
  }

  const { song } = state;
  const Wrapper = song.songUrl ? 'a' : 'div';
  const linkProps = song.songUrl
    ? { href: song.songUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper className={styles.card} {...linkProps}>
      {song.albumImageUrl && <img className={styles.art} src={song.albumImageUrl} alt="" />}
      <span className={styles.info}>
        <span className={styles.label}>
          {song.isPlaying && (
            <span className={styles.eq} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          )}
          {song.isPlaying ? 'now playing' : 'last played'}
        </span>
        <span className={styles.title}>{song.title}</span>
        <span className={styles.artist}>{song.artist}</span>
      </span>
    </Wrapper>
  );
};

export default MusicNowPlaying;
