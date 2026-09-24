/* eslint-disable @next/next/no-img-element -- GIFs are stretched to fill, not optimized */
import Link from 'next/link';
import styles from './music.module.css';

const MusicPage = () => (
  <main className={styles.page}>
    <div className={styles.collage} aria-hidden="true">
      <img src="/music/crowd.gif" alt="" className={styles.top} />
      <img src="/music/dj-left.jpg" alt="" className={styles.bottomLeft} />
      <img src="/music/dj-right.jpg" alt="" className={styles.bottomRight} />
    </div>
    <Link href="/" className={styles.back}>&larr; paige.</Link>
    <h1 className={styles.mark}>p.</h1>
  </main>
);

export default MusicPage;
