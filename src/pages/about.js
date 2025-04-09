import React, { useState } from 'react';
import Layout from '../components/Layout';
import avatar from '../images/avatar.png';
import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <div className={styles.leftsection}>
          <Image src={avatar} alt="avatar" />
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
                <h2>CHAPMAN UNIVERSITY 2021 - 2025</h2>
                <h3>B.S. DATA SCIENCE</h3>
                <p>MINOR: Business Administration</p>
                <p>HONORS: Dean&apos;s Scholar, Provost List</p>
                <p>FAVORITE CLASSES: Math Foundations of Machine Learning, Artificial Intelligence, Machine Learning, Digital Logic Through Minecraft</p>
              </div>
            )}
            {activeTab === 'experience' && (
              <div className={styles.content}>
                <h2>AI STUDIO INTERN @ AMERICAN EXPRESS</h2>
                <p>AUG 2024 - JAN 2025</p>
                <ul>
                  <li>Engineered a 2-tower model with attention mechanisms trained on over 100,000 instances of historical user activity</li>
                  <li>Increased overall product recommendation accuracy by 45% in order to optimize user experience and drive revenue growth</li>
                  <li>Managed end-to-end model development process, including extensive testing to ensure a measurable increase in performance</li>
                </ul>
                <h2>MACHINE LEARNING FELLOW @ BTT UCLA</h2>
                <p>JUNE 2024 - MAY 2025</p>
                <ul>
                  <li>Engaged in a 12-month long program including hands-on experience and machine learning coursework with Cornell faculty</li>
                  <li>Solidified understanding of various techniques including natural language processing, image classification, and deep learning</li>
                </ul>
                <h2>RESEARCH ASSISTANT @ LEARN, ADAPT, BUILD LAB</h2>
                <p>DECEMBER 2023 - DECEMBER 2024 </p>
                <ul>
                  <li>Developed a matching algorithm in Python for multi-round grouping of study participants based on survey responses</li>
                  <li>Collaborated on the execution of the study, planning detailed data collection techniques and organizational strategies</li>
                  <li>Analyzed success of pairings using clustering algorithms based on demographic data in order to identify patterns</li>
                </ul>
                <h2>DATA INTEGRITY @ GIANT</h2>
                <p>JUNE 2022 - AUG 2022</p>
                <ul>
                  <li>Optimized ordering systems using database queries and system analysis to find and correct over 200 inaccuracies daily</li>
                  <li>Introduced database organizational strategies for item location which lead to 40% overall faster database correction rates</li>
                  <li>Conducted weekly audits in order to identify system flaws and implement improvements, effectively managing the database</li>
                </ul>
              </div>
            )}
            {activeTab === 'skills' && (
              <div className={styles.skillcontent}>
                <h2>DATA SCIENCE</h2>
                <ul>
                  <li>Python, SQL, R</li>
                  <li>Data Mining/Web Scraping</li>
                  <li>Tableau</li>
                  <li>Excel</li>
                  <li>Power BI</li>
                  <li>Data Visualization</li>
                  <li>Buisness and Marketing Analytics</li>
                  <li>Probability & Statistics</li>
                </ul>
                <h2>MACHINE LEARNING</h2>
                <ul>
                  <li>Large Lanuage Models</li>
                  <li>Computer Vision</li>
                  <li>Natural Language Processing</li>
                  <li>Reinforcement Learning</li>
                  <li>Deep Learning</li>
                  <li>Linear Algebra & Calculus</li>
                  <li>Data Streuctures & Algorithms</li>
                </ul>
                <h2>SOFTWARE ENGINEERING</h2>
                <ul>
                  <li>Web Engineering</li>
                  <li>IOS App Development</li>
                  <li>Object-Oriented Programming</li>
                  <li>Swift</li>
                  <li>JavaScript</li>
                  <li>HTML & CSS</li>
                  <li>C++</li>
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

