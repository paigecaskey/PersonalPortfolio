/* eslint-disable @next/next/no-img-element -- media is stretched to fill, not optimized */
import Link from 'next/link';
import styles from './music.module.css';

const MusicPage = () => (
  <main className={styles.page}>
    <div className={styles.collage} aria-hidden="true">
      <img src="/music/crowd.gif" alt="" className={styles.top} />
      {/* GIFs converted to looping video: same look, ~10x smaller. */}
      <video poster="/music/dj-left.jpg" autoPlay muted loop playsInline className={styles.bottomLeft}>
        <source src="/music/dj-left.webm" type="video/webm" />
        <source src="/music/dj-left.mp4" type="video/mp4" />
      </video>
      {/* Same clip, mirrored left-to-right. */}
      <video poster="/music/dj-left.jpg" autoPlay muted loop playsInline className={styles.bottomRight}>
        <source src="/music/dj-left.webm" type="video/webm" />
        <source src="/music/dj-left.mp4" type="video/mp4" />
      </video>
    </div>
    <Link href="/" className={styles.back}>&larr; paige.</Link>
    <h1 className={styles.mark}>p.</h1>
  </main>
);

export default MusicPage;
