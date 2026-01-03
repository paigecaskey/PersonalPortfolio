import React from 'react';
import Layout from '../components/Layout';
import Window from '../components/Window';
import Image from 'next/image';
import careerStyles from './career.module.css';
import avatar from '../images/avatar.png';
import me from '../images/me.png';
import github from '../images/github.png';

const CareerPage = () => {
  return (
    <Layout>
      <div className={careerStyles.collage}>

        {/* EDUCATION */}
        <Window title="EDUCATION" className={careerStyles['window-large']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <Image src={avatar} alt="Education" width={100} height={100} />
            </div>
            <div className={careerStyles.textContent}>
              <h2>CHAPMAN UNIVERSITY</h2>
              <h3>B.S. Data Science (2021 - 2025)</h3>
              <p><strong>MINOR:</strong> Business Administration</p>
              <p><strong>HONORS:</strong> Dean's Scholar, Provost List</p>
              <p><strong>FAVORITE CLASSES:</strong> Math Foundations of Machine Learning, Artificial Intelligence, Machine Learning, Digital Logic Through Minecraft</p>
              <a download href="/PAIGECASKEYresume.pdf" className={careerStyles.downloadLink}>
                <button class={careerStyles.button} style={{fontSize: '14px'}}>DOWNLOAD MY RESUME :)</button>
              </a>
            </div>
          </div>
        </Window>

        {/* SKILLS */}
        <Window title="TECHNICAL SKILLS" className={careerStyles['window-large']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.textContent} style={{textAlign: 'center'}}>
              <h2>Core Competencies</h2>
              <div className={careerStyles.skillGrid}>
                <div className={careerStyles.skillCategory}>
                  <h3>AI & MACHINE LEARNING</h3>
                  <ul>
                    <li>Math Foundations (Linear Alg, Calculus, etc.)</li>
                    <li>Prompt Engineering & Evals</li>
                    <li>Natural Language Processing</li>
                    <li>Deep Learning (TensorFlow, PyTorch)</li>
                    <li>Traditional ML Algorithms</li>
                  </ul>
                </div>
                <div className={careerStyles.skillCategory}>
                  <h3>SOFTWARE & PROGRAMMING</h3>
                  <ul>
                    <li>Platform LLM Integration</li>
                    <li>Model Serving and Deployment</li>
                    <li>API Implementation</li>
                    <li>Python, SQL, R, C++, JavaScript, CSS</li>
                    <li>Web Engineering & Design</li>
                    <li>Object Oriented Programming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Window>

        {/* SPROUT SOCIAL */}
        <Window title="SPROUT SOCIAL" className={careerStyles['window-medium']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <h1>✽</h1>
            </div>
            <div className={careerStyles.textContent}>
              <h2>Associate Applied AI/ML Scientist</h2>
              <p><em>Jun 2025 - Present</em></p>
              <ul>
                <li>Full-time AI/ML scientist focusing on applied solutions in social media</li>
              </ul>
            </div>
          </div>
        </Window>

        {/* AMERICAN EXPRESS */}
        <Window title="AMERICAN EXPRESS" className={careerStyles['window-medium']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <h1>✽</h1>
            </div>
            <div className={careerStyles.textContent}>
              <h2>AI Studio Intern</h2>
              <p><em>Aug 2024 - Dec 2024</em></p>
              <ul>
                <li>Developed recommendation engine using 2-tower model with attention mechanisms</li>
                <li>Enhanced personalized content delivery for knowledge articles, search results, and membership suggestions</li>
                <li>Led team to create scalable solution improving content discovery</li>
              </ul>
            </div>
          </div>
        </Window>

        {/* BTT UCLA */}
        <Window title="BTT UCLA" className={careerStyles['window-medium']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <h1>✽</h1>
            </div>
            <div className={careerStyles.textContent}>
              <h2>Machine Learning Fellow</h2>
              <p><em>Jun 2024 - May 2025</em></p>
              <ul>
                <li>Selected from 3,000+ applicants for intensive ML curriculum taught by Cornell faculty</li>
                <li>Worked on projects applying ML and deep learning to real-world problems</li>
                <li>Collaborated with peers to design and implement innovative solutions</li>
              </ul>
            </div>
          </div>
        </Window>

        {/* RESEARCH LAB */}
        <Window title="L.A.B. LAB" className={careerStyles['window-medium']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <h1>✽</h1>
            </div>
            <div className={careerStyles.textContent}>
              <h2>Research Assistant</h2>
              <p><em>Jan 2024 - May 2025</em></p>
              <ul>
                <li>Coordinated and organized research programs and events for data collection</li>
                <li>Developed web application for participant data collection and group matching using clustering algorithms</li>
                <li>Performed data analysis and co-authored a published research paper</li>
              </ul>
            </div>
          </div>
        </Window>

        {/* GIANT */}
        <Window title="GIANT FOOD" className={careerStyles['window-medium']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <h1>✽</h1>
            </div>
            <div className={careerStyles.textContent}>
              <h2>Data Integrity</h2>
              <p><em>May 2022 - Sep 2022</em></p>
              <ul>
                <li>Managed company database, correcting 200+ inaccuracies daily</li>
                <li>Implemented organizational strategies reducing inventory errors by 74%</li>
                <li>Conducted weekly audits to identify and fix system flaws</li>
              </ul>
            </div>
          </div>
        </Window>

      </div>
    </Layout>
  );
};

export default CareerPage;


