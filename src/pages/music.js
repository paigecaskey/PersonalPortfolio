/* eslint-disable @next/next/no-img-element -- media is stretched to fill, not optimized */
import Link from 'next/link';
import styles from './music.module.css';

const MusicPage = () => (
  <main className={styles.page}>
    <div className={styles.collage} aria-hidden="true">
      <img src="/music/crowd.gif" alt="" className={styles.top} />
      {/* GIFs converted to looping video: same look, ~10x smaller. */}
      <div className={styles.insta2016}>
        <video poster="/music/dj-left.jpg" autoPlay muted loop playsInline>
          <source src="/music/dj-left.webm" type="video/webm" />
          <source src="/music/dj-left.mp4" type="video/mp4" />
        </video>
      </div>
      <video poster="/music/dj-right.jpg" autoPlay muted loop playsInline>
        <source src="/music/dj-right.webm" type="video/webm" />
        <source src="/music/dj-right.mp4" type="video/mp4" />
      </video>
    </div>
    <Link href="/" className={styles.back}>&larr; paige.</Link>
    <h1 className={styles.mark}>p.</h1>
  </main>
);

export default MusicPage;
