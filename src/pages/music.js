import Link from 'next/link';
import styles from './music.module.css';

const MusicPage = () => (
  <main className={styles.page}>
    <Link href="/" className={styles.back}>&larr; paige.</Link>
    <h1 className={styles.mark}>p.</h1>
  </main>
);

export default MusicPage;
