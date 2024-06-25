// src/pages/index.js

import Layout from '../components/Layout';
import styles from './index.module.css';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.nameContainer}>
        <p className={styles.name}>☆ PAIGE CASKEY ☆</p>
        <p className={styles.about}>
          I am a <span className={styles.emph}>Data Scientist</span> specializing in
          <span className={styles.emph}>Recommendation Systems</span> and
          <span className={styles.emph}>Information Theory</span>
          <br />
          Let&apos;s work together!
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;


