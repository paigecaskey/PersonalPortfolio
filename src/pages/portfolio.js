import React from 'react';
import Layout from '../components/Layout';
import styles from './portfolio.module.css';
import PortfolioCard from '../components/PortfolioCard';

const PortfolioPage = () => {
  return (
    <Layout>
      <div className={styles.buttonContainer}>
      <a download href= "/PAIGECASKEYresume.pdf">
        <button class={styles.downloadButton}>DOWNLOAD RESUME</button>
      </a>
      </div>
      <div>
        <PortfolioCard
          imageSrc="/disco.png"
          title="Spring Symosium Presentation"
          description="I had the privilege of being able to talk about the research I worked on this semester, titled 'Connecting diverse identities through celebratory technology to reduce social stigma in college students'"
          link="https://www.linkedin.com/posts/paige-caskey_this-past-wednesday-at-chapmans-student-activity-7193306619084967936-sbeI?utm_source=share&utm_medium=member_desktop"
        />
        <PortfolioCard
          imageSrc="/playlist.jpg"
          title="Spotify Playlist Generator"
          description="I created a web application that allows users to make a unique Spotify playlist based on a custom algorithm I designed, which recommends songs based on user data such as top artists, genres, and songs, using the Spotify API and authentification flow."
          link="https://github.com/paigecaskey/Playlist"
        />
        <PortfolioCard
          imageSrc="/personal.jpg"
          title="Personal Spotify Data"
          description="If you're ever curious about my current music taste, this project uses the Spotify API to map my personal Spotify data (top artists and what song I'm currently listening to) to a web application."
          link="https://github.com/paigecaskey/SpotifyData"
        />
        <PortfolioCard
          imageSrc="/WIDS.jpg"
          title="Women in Data Science Datathon"
          description="Over winter break, I participated in a hackathon, where my team and I utilized a CatBoost model to predict time to treatment for women with triple metastsic breat cancer. We were able to acheive the highest accuracy rate out of all Chapman University teams."
        />
      </div>
    </Layout>
  );
};

export default PortfolioPage;

