/* eslint-disable @next/next/no-img-element -- media is stretched to fill, not optimized */
import Link from 'next/link';
import styles from './music.module.css';

const MusicPage = () => (
  <main className={styles.page}>
    <div className={styles.collage} aria-hidden="true">
      <img src="/music/crowd.gif" alt="" className={styles.top} />
      {/* GIFs converted to looping video: same look, ~10x smaller. */}
      <div className={styles.bottom}>
        <video poster="/music/dj-left.jpg" autoPlay muted loop playsInline className={styles.djLeft}>
          <source src="/music/dj-left.webm" type="video/webm" />
          <source src="/music/dj-left.mp4" type="video/mp4" />
        </video>
        {/* Same clip, mirrored left-to-right. */}
        <video poster="/music/dj-left.jpg" autoPlay muted loop playsInline className={styles.djRight}>
          <source src="/music/dj-left.webm" type="video/webm" />
          <source src="/music/dj-left.mp4" type="video/mp4" />
        </video>
        <div className={styles.vignette} />
      </div>
    </div>
    <Link href="/" className={styles.back}>&larr; paige.</Link>
    {/* Buttons match in size so the line stays dead center. */}
    <div className={styles.stack}>
      <a
        className={styles.button}
        href="https://soundcloud.com/404paigefound"
        target="_blank"
        rel="noopener noreferrer"
      >
        soundcloud!
      </a>
      <h1 className={styles.mark}>let me DJ 4 u :)))</h1>
      <button type="button" className={styles.button}>coming soon!</button>
    </div>
  </main>
);

export default MusicPage;
