import Link from 'next/link';
import styles from './index.module.css';

const SECTIONS = [
  { label: 'music!', href: '/music' },
  { label: 'tech!' },
  { label: 'fashion!' },
  { label: 'contact?', href: '/contact' },
];

const HomePage = () => (
  <main className={styles.page}>
    <div className={styles.hero}>
      <h1 className={styles.name}>paige.</h1>
      <nav className={styles.grid}>
        {SECTIONS.map(({ label, href }) => (href ? (
          <Link key={label} href={href} className={styles.button}>
            {label}
          </Link>
        ) : (
          <button key={label} type="button" className={styles.button}>
            {label}
          </button>
        )))}
      </nav>
    </div>
  </main>
);

export default HomePage;
