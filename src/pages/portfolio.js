import React from 'react';
import Layout from '../components/Layout';
import styles from './portfolio.module.css';
import PortfolioCard from '../components/PortfolioCard';

const PortfolioPage = () => {
  return (
    <Layout>
      <div className={styles.buttonContainer}>
      <a download href= "/PAIGECASKEYresume.pdf">
        <button class={styles.downloadButton}>DOWNLOAD MY RESUME :)</button>
      </a>

      </div>
      <div>
      <PortfolioCard
          title="MINDSPACE - A MOOD PREDICTING JOURNAL"
          description="Developed in Swift, this IOS application uses a sentiment-predicting machine learning model
          to predict whether the users journal entry could contain signs on a mental health problem. Using natural
          language processing, after the user enters their journal entry, the application will classify the writing
          as one of five possible cases."
          link="https://github.com/paigecaskey/MindSpace"
          tags = "IOS App Development, Swift, Machine Learning, UX/UI Design, Natural Language Processing"
        />
        <PortfolioCard
          title="BOOK REVIEW SENTIMENT ANALYSIS"
          description="This project performs sentiment analysis on customer book reviews, using various machine learning
          models and text vectorization to predict whether the review was positive or negetive. In this binary classification
          task, methods like grid search, random search, and hyperparameter tuning were used to optimize the model's performance,
          ending up with an accuracy of 78% and an AUC score of 87%."
          link="https://github.com/paigecaskey/SentimentAnalysis"
          tags = "Machine Learning, Natural Language Processing, Python, Pandas, Scikit-Learn, NLTK, Jupyter Notebook"
        />
        <PortfolioCard
          title="PLAYLIST MAKER - CUSTOM ALGORITHM FOR SONG RECOMMENDATIONS"
          description="I created a web application that allows users to make a unique Spotify playlist based on a 
          custom algorithm I designed, which recommends songs based on the user's data such as their favorite artists, 
          genres, and songs. Simply authenticate with spotify, name your playlist, then add songs that are recommended
          by the algorithm. (Unfortunately, you can't test it out for yourself because the app is still in development
          mode per Sptofy's policies.)"
          link = "https://github.com/paigecaskey/PlaylistGenerator"
          tags = "Authorization Code Flow, API Integration, JavaScript, HTML, CSS, Web Development, UX/UI Design"
        />
        <PortfolioCard
          title="WEB APP SHOWCASING MY SPOTIFY DATA"
          description="If you're ever curious about my current music taste, this project uses the Spotify API to 
          map my top artists and what song I'm currently listening to to a web application. It also helps me
          carefully curate my Spotify wrapped, which is something I'm very passionate about because I've had some
          embarassing top artists over the years."
          link = "https://paigecaskey.github.io/Spotify-Data/"
          tags = "JavaScript, HTML, CSS, API Integration, Web Development, UX/UI Design"
        />
        <div className={styles.lastCard}>
          <PortfolioCard
            title="DATA SCRAPER FOR CLOTHING RESELLING SITE"
            description="This is a web scraper I used to get from a clothing reselling website (of which I won't name directly, but can be inferred). 
            I wanted to do a class project on something I was interested in, so I decided to get the data myself. 
            This uses Python and the Selenium library to parse through the HTML and gather things like item name, 
            description, and price."
            link = "https://github.com/paigecaskey/WebScraperSelenium"
            tags = "Python, HTML, Selenium, Web Scraping, Data Collection"
          />
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioPage;

