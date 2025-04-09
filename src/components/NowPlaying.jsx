import React, { useState, useEffect } from 'react';
import styles from './NowPlaying.module.css';

function NowPlaying() {
    const [song, setSong] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/spotify');
                if (!response.ok) throw new Error('Failed to fetch');
                if (response.status === 204) throw new Error('offline');

                const nowPlaying = await response.json();
                setSong(nowPlaying);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            {error && (
                <div className={error === 'offline' ? styles.offlineError : styles.defaultError}>
                    {error}
                </div>
            )}
            {song && (
                <div className={styles.songInfo}>
                    <img className={styles.albumArt} src={song.albumImageUrl} alt="cover art" />
                    <div className={styles.details}>
                        <div className={styles.title}>{song.title}</div>
                        <div className={styles.artist}>{song.artist}</div>
                    </div>
                </div>
            )}
            {!song && !error && <p className={styles.loading}>Loading...</p>}
        </div>
    );
}

export default NowPlaying;
