import styles from './index.module.css';

const SECTIONS = ['music!', 'tech!', 'fashion!', 'contact?'];

const HomePage = () => (
  <main className={styles.page}>
    <div className={styles.hero}>
      <h1 className={styles.name}>paige.</h1>
      <nav className={styles.grid}>
        {SECTIONS.map((label) => (
          <button key={label} type="button" className={styles.button}>
            {label}
          </button>
        ))}
      </nav>
    </div>
  </main>
);

export default HomePage;
