import React from 'react';
import Layout from '../components/Layout';
import Window from '../components/Window';
import Image from 'next/image';
import creationsStyles from './creations.module.css';
import avatar from '../images/avatar.png';
import me from '../images/me.png';
import github from '../images/github.png';
import TikTokEmbed from '../components/TikTokEmbed';
import LinkedInEmbed from '../components/LinkedInEmbed';
import depopImage from '../images/depop.png';

const ContentPage = () => {
  return (
    <Layout>
      <div className={creationsStyles.collage}>

        {/* MAIN CONTENT */}
        <Window title="MY CREATIONS" className={creationsStyles['window-large']}>
          <div className={creationsStyles.windowContent}>
            <div className={creationsStyles.imageContainer}>
              <Image src={avatar} alt="Content" width={100} height={100} />
            </div>
            <div className={creationsStyles.textContent}>
              <h2>AI, Technology, and Art</h2>
              <p>
                Each project I work on reflects my interest in innovation, 
                creativity, and sustainability.
              </p>
            </div>
          </div>
        </Window>
        {/* DEPOP FEATURE */}
        <Window title="SUSTAINABLE FASHION" className={creationsStyles['window-large']}>
          <div className={creationsStyles.windowContent}>
            <div className={creationsStyles.centeredTextContent}>
              <h4> A personally curated Depop shop with over <b>500 sales</b> and <b>$5k+ in revenue</b>, where I manage everything end-to-end — sourcing, styling, customer experience, shipping, and operations. Each piece is thoughtfully selected to give pre-loved clothing a second life.</h4>
              {/* Article Preview Card */}
              <a
                href="https://www.depop.com/stockmarquette/"
                target="_blank"
                rel="noopener noreferrer"
                className={creationsStyles.articleCard}
              >
                <div className={creationsStyles.articleContent}>
                  <h3>
                    Discover Unique Pieces
                  </h3>
                  <p>
                    A curated collection of vintage clothing, accessories, and unique finds. Each piece tells a story and adds character to any wardrobe.
                  </p>
                  <span className={creationsStyles.readMore}>
                    Shop the collection →
                  </span>
                </div>
                <Image
                  src={depopImage}
                  alt="Depop Vintage Fashion Collection"
                  width={120}
                  height={120}
                  className={creationsStyles.articleImage}
                />
              </a>
            </div>
          </div>
        </Window>
        {/* TIKTOK */}
        <Window title="VISUAL ART" className={creationsStyles['window-large']}>
          <div className={creationsStyles.tiktokWindowContent}>
            <div className={creationsStyles.textContent}>
              <h2>AI-Powered Audio-Reactive Art</h2>
              <p>I create audio-reactive visual art using machine learning and computer vision with tools like TouchDesigner, YOLO, and MediaPipe. 
                I share these interactive experiments on TikTok, exploring how AI can be used as a creative medium.</p>

            </div>
            <div className={creationsStyles.tiktokContainer}>
              <TikTokEmbed videoId="7590930318178159885" username="404paigefound" />

            </div>
          </div>
        </Window>

        {/* LINKEDIN FEATURE */}
        <Window title="CREATIVE INDUSTRIES" className={creationsStyles['window-large']}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <div className={creationsStyles.linkedinTextContent}>
              <h2>Art, AI, & Creative Futures</h2>
              <p>
                <em>Reflections from the AI and Creativity Summit</em>
              </p>
            </div>
            {/* LinkedIn Embed */}
            <LinkedInEmbed postUrl="https://www.linkedin.com/feed/update/urn:li:activity:7401726882842656768/" />
          </div>
        </Window>


        {/* TIKTOK */}
        <Window title="EDUCATIONAL CONTENT" className={creationsStyles['window-large']}>
          <div className={creationsStyles.tiktokWindowContent}>
            <div className={creationsStyles.textContent}>
              <h2>Artifical Intelligence & Futurism</h2>
              <p>I post cross-platform videos that educate people on the state of Artifical Intelligence, taking a neutral and informed stance. 
                Topics include environmentel impacts, futurism, and technical aspects.</p>
            </div>
            <div className={creationsStyles.tiktokContainer}>
              <TikTokEmbed videoId="7589375226153143583" username="paigeinthemachine" />
            </div>
          </div>
        </Window>

        {/* MEDIUM ARTICLE PREVIEW */}
        <Window title="TECHNICAL WRITING" className={creationsStyles['window-large']}>
          <div className={creationsStyles.windowContent}>
            <div className={creationsStyles.textContent}>
              <h2>Explaining Adam & Momentum for Gradient Descent Optimization</h2>
              <p><em>Medium · Technical Writing</em></p>

              <p>
                Adam is one of the most popular adaptive learning rate algorithms, and this
                is because it incorporates the concept of momentum into its formula.
                Although considered an adaptive learning rate algorithm, the learning rate
                itself is not actually changing. Instead, the step size is adapted using
                first and second moment estimates, allowing for smooth, consistent updates
                scaled to the magnitude of historical gradients.
              </p>

              <a
                href="https://medium.com/p/45c2dc6a9798"
                target="_blank"
                rel="noopener noreferrer"
                className={creationsStyles.downloadLink}
              >
                <button className={creationsStyles.button}>
                  READ FULL ARTICLE
                </button>
              </a>

            </div>

          </div>
        </Window>
      </div>
    </Layout>
  );
};

export default ContentPage;