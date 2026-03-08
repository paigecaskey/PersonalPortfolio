import React from 'react';
import Layout from '../components/Layout';
import Window from '../components/Window';
import Image from 'next/image';
import careerStyles from './career.module.css';
import avatar from '../images/avatar.png';
import articleImage from '../images/article.png';

const CareerPage = () => {
  return (
    <Layout stickersBehindContent>
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
              <p><strong>HONORS:</strong> Dean&apos;s Scholar, Provost List</p>
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

        {/* PANTHER NETWORK */}
        <Window title="PANTHER NETWORK" className={careerStyles['window-medium']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <h1>✽</h1>
            </div>
            <div className={careerStyles.textContent}>
              <h2>Student & Early Career Mentor</h2>
              <p><em>Jan 2026 - Present</em></p>
              <ul>
                <li>Mentor students from my alma mater and broader tech community</li>
                <li>Provide resume feedback, career guidance, and application support</li>
                <li>Support students navigating internships and early-career paths in tech</li>
              </ul>
            </div>
          </div>
        </Window>

        {/* BTT UCLA - AMBASSADOR */}
        <Window title="BTT UCLA (AMBASSADOR)" className={careerStyles['window-medium']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <h1>✽</h1>
            </div>
            <div className={careerStyles.textContent}>
              <h2>Fellow Ambassador</h2>
              <p><em>Sep 2025 - Present</em></p>
              <ul>
                <li>Serve as a community advocate for Break Through Tech, supporting prospective and current fellows</li>
                <li>Host virtual information sessions with admissions for prospective applicants, sharing my personal journey</li>
                <li>Participate as a panelist in career services events to share industry and fellowship experience</li>
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

        {/* WOMEN IN SCIENCE & TECHNOLOGY */}
        <Window title="WOMEN IN SCIENCE & TECHNOLOGY" className={careerStyles['window-medium']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <h1>✽</h1>
            </div>
            <div className={careerStyles.textContent}>
              <h2>Historian</h2>
              <p><em>Aug 2024 - May 2025</em></p>
              <ul>
                <li>Managed social media through graphics design, post scheduling, and community outreach</li>
                <li>Networked with professionals to bring guest speakers and career insights to members</li>
                <li>Led campus engagement initiatives including tabling and club fairs to increase visibility</li>
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

        {/* BTT UCLA - FELLOWSHIP */}
        <Window title="BTT UCLA (FELLOWSHIP)" className={careerStyles['window-medium']}>
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

        {/* GIANT */}
        <Window title="GIANT FOOD STORES" className={careerStyles['window-medium']}>
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

        {/* LEADERSHIP + COMMUNITY OVERVIEW */}
        <Window title="LEADERSHIP & COMMUNITY" className={careerStyles['window-large']}>
          <div className={careerStyles.textContent}>
            <h3>
              Alongside my technical work, I focus on leadership that expands access to AI and
              technology careers. I mentor students, support underrepresented groups, and build
              community through education, advocacy, and career guidance.
            </h3>
          </div>
        </Window>

        {/* FEATURED ARTICLE */}
        <Window title="FEATURED ARTICLE" className={careerStyles['window-large']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.centeredTextContent}>
              <h2>Shaping My Future in AI</h2>
              <p>
                <em>Break Through Tech · Stories & Insights</em>
              </p>

              <a
                href="https://www.breakthroughtech.org/what-we-do/stories-insights/paige-caskey-shaping-her-future-in-ai-with-break-through-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className={careerStyles.articleCard}
              >
                <div className={careerStyles.articleContent}>
                  <h3>Paige Caskey: Shaping Her Future in AI with Break Through Tech</h3>
                  <p>
                    A feature on my journey into AI, my Break Through Tech experience, and how
                    community, creativity, and technical growth intersect in my career.
                  </p>
                  <span className={careerStyles.readMore}>
                    Read the full story →
                  </span>
                </div>
                <Image
                  src={articleImage}
                  alt="Paige Caskey - Break Through Tech Feature"
                  width={120}
                  height={120}
                  className={careerStyles.articleImage}
                />
              </a>
            </div>
          </div>
        </Window>

      </div>
    </Layout>
  );
};

export default CareerPage;


