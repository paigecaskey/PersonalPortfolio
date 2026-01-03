import React from 'react';
import Layout from '../components/Layout';
import Window from '../components/Window';
import careerStyles from './career.module.css';
import Image from 'next/image';
import avatar from '../images/avatar.png';
import articleImage from '../images/article.png';

const LeadershipPage = () => {
  return (
    <Layout>
      <div className={careerStyles.collage}>

        {/* PAGE HEADER */}
        <Window title="LEADERSHIP OVERVIEW" className={careerStyles['window-large']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <Image src={avatar} alt="Education" width={100} height={100} />
            </div>
            <div className={careerStyles.textContent}>
              <h3>
                I focus on empowering others, building inclusive communities,
                and helping students and early-career technologists feel confident
                pursuing opportunities in tech. Drawing from my own experiences,
                most of my leadership work focuses on supporting underrepresented groups.
              </h3>
            </div>
          </div>
        </Window>
        {/* BREAK THROUGH TECH FEATURE */}
        <Window title="FEATURED ARTICLE" className={careerStyles['window-large']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.centeredTextContent}>
              <h2>
                Shaping My Future in AI
              </h2>
              <p>
                <em>Break Through Tech · Stories & Insights</em>
              </p>

              {/* Article Preview Card */}
              <a
                href="https://www.breakthroughtech.org/what-we-do/stories-insights/paige-caskey-shaping-her-future-in-ai-with-break-through-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className={careerStyles.articleCard}
              >
                <div className={careerStyles.articleContent}>
                  <h3>
                    Paige Caskey: Shaping Her Future in AI with Break Through Tech
                  </h3>
                  <p>
                    A feature on my journey into AI, my experience with Break Through Tech,
                    and how community, creativity, and technical growth intersect in my career.
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

      <Window title="BTT UCLA" className={careerStyles['window-large']}>
        <div className={careerStyles.windowContent}>
          <div className={careerStyles.imageContainer}>
            <h1>✽</h1>
          </div>
          <div className={careerStyles.textContent}>
            <h2>Fellow Ambassador</h2>
            <p><em>Sept 2025 – Present</em></p>
            <ul>
              <li>Serve as a community advocate for Break Through Tech, supporting prospective and current fellows</li>
              <li>Host virtual information sessions with the admissions team for prospective applicant, sharing my personal story</li>
              <li>Participate as a panelist for career services events, sharing industry and fellowship experience</li>
            </ul>
          </div>
        </div>
      </Window>


        {/* MENTORSHIP */}
        <Window title="PANTHER NETWORK" className={careerStyles['window-medium']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <h1>✽</h1>
            </div>
            <div className={careerStyles.textContent}>
              <h2>Student & Early Career Mentor</h2>
              <p><em>January 2026 - Present</em></p>
              <ul>
                <li>Mentor students from my alma mater and broader tech community</li>
                <li>Provide resume feedback, career guidance, and application help</li>
                <li>Support students navigating internships and early-career paths</li>
              </ul>
            </div>
          </div>
        </Window>

        <Window title="WOMEN IN SCIENCE & TECHNOLOGY" className={careerStyles['window-medium']}>
          <div className={careerStyles.windowContent}>
            <div className={careerStyles.imageContainer}>
              <h1>✽</h1>
            </div>
            <div className={careerStyles.textContent}>
              <h2>Historian</h2>
              <p><em> Aug 2024 – May 2025</em></p>
              <ul>
                <li>Managed social media by designing graphics, scheduling posts, and conducting community outreach</li>
                <li>Networked with industry professionals to bring guest speakers and career insights to meetings</li>
                <li>Led campus engagement initiatives including tabling and club fairs, increasing membership and visibility</li>
              </ul>
            </div>
          </div>
        </Window>

      </div>
    </Layout>
  );
};

export default LeadershipPage;


