import React, { useState } from 'react';
import Layout from '../components/Layout';
import me from '../images/me.png';
import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <div className={styles.leftsection}>
          <Image src={me} alt="me" />
        </div>
        <div className={styles.rightsection}>
          <div className={styles.tabs}>
            <div
              className={`${styles.tab} ${activeTab === 'education' ? styles.active : ''}`}
              onClick={() => handleTabClick('education')}
            >
              EDUCATION
            </div>
            <div
              className={`${styles.tab} ${activeTab === 'experience' ? styles.active : ''}`}
              onClick={() => handleTabClick('experience')}
            >
              EXPERIENCE
            </div>
            <div
              className={`${styles.tab} ${activeTab === 'skills' ? styles.active : ''}`}
              onClick={() => handleTabClick('skills')}
            >
              SKILLS
            </div>
          </div>
          <div className={styles.tabContent}>
            {activeTab === 'education' && (
              <div className={styles.content}>
                <h3>Chapman University 2021-2025</h3>
                <p>Bachelor of Science in Data Science</p>
                <p>Minor in Business Administration</p>
                <p>Dean&apos;s Scholar, 3.7 GPA</p> {/* Escape apostrophe */}
              </div>
            )}
            {activeTab === 'experience' && (
              <div className={styles.content}>
                <h2>ML/AI Fellow @ BTT UCLA</h2>
                <p>2024 - Present</p>
                <h2>Research Assistant @ Learn, Adapt, Build Lab</h2>
                <p>2023 - Present</p>
                <h2>Data Integrity @ Giant</h2>
                <p>2022 - 2022</p>
              </div>
            )}
            {activeTab === 'skills' && (
              <div className={styles.content}>
                <h2>Advanced</h2>
                <ul>
                  <li>Python (Pandas, Pytorch, TensorFlow, Selenium)</li>
                  <li>Data Structures & Algorithms (Graphs, Trees, Sorting)</li>
                  <li>Machine Learning Models & Information Theory</li>
                  <li>Ethical Engineering and Design</li>
                </ul>
                <h2>Intermediate</h2>
                <ul>
                  <li>Web Engineering (JavaScript, CSS, React)</li>
                  <li>Object-Oriented Programming Languages (Java, C++)</li>
                  <li>UX/UI Design</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

