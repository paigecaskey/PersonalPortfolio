import Layout from '../components/Layout';
import styles from './index.module.css';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Layout>
      <div className = {styles.nameContainer}>
        <p className = {styles.name}>☆PAIGE CASKEY☆</p>
      <p className = {styles.about}>I am a <span className={styles.emph}>Data Scientist</span>specializing in <span className={styles.emph}>Recommendation Systems</span>and <span className={styles.emph}>Information Theory</span><br />Let's work together! :)</p>
      </div>
    </Layout>
    /*
    <Layout>
      <div className={styles.introContainer}>
        <div className={styles.leftsection}>
          <p><span className={styles.emph}>HI! </span> MY NAME IS <span className={styles.emph}>PAIGE</span>. I'M A 
          <br /><span className={styles.emph}>DATA SCIENTIST</span> LOCATED IN 
          <br /><span className={styles.emph}>LOS ANGELES</span>.
          <br />I SPECIALIZE IN...</p>
        </div>
        <div className={styles.rightsection}>
            <ul className={styles.skilllist}>
              <li className={styles.skill}>✱ MACHINE LEARNING</li>
              <li className={styles.skill}>✱ ALGORITHM DESIGN</li>
              <li className={styles.skill}>✱ DATABASE MANAGEMENT</li>
            </ul>
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <button className={styles.aboutButton}><Link href="/about">MORE ABOUT ME</Link></button>
        </div>
    </Layout>
    */

  );
};

export default HomePage;
