import Layout from '../components/Layout';
import Image from 'next/image';
import indexStyles from './index.module.css';
import NowPlaying from '../components/NowPlaying';
import TopArtist from '../components/TopArtist';
import Window from '../components/Window';
import avatar from '../images/avatar.png';

const HomePage = () => {
  return (
    <Layout>
      <div className={indexStyles.collage}>
        <Window title="WELCOME" className={indexStyles['window-large']}>
          <div className={indexStyles.profileBox}>
            <div className={indexStyles.avatarBox}>
              <Image src={avatar} alt="Avatar" />
            </div>
            <div className={indexStyles.textArea}>
              <h2>PAIGE CASKEY</h2>
              <h3>AI SCIENTIST</h3>
              <div className={indexStyles.nowplayingbox}>
                <NowPlaying />
              </div>
              <p className={indexStyles.playingcaption}> ^ what I'm listening to on spotify ^</p>
            </div>
          </div>
        </Window>

        <Window title="ABOUT ME" className={indexStyles['window-medium']}>
                  <Window title="TOP SPOTIFY ARTIST" className={indexStyles['window-medium']}>
                    <TopArtist />
                  </Window>
          <p>I’m an <b>AI Scientist, creative technologist, and community advocate</b> passionate about building technology that is <b>human-centered, artistic, and inclusive.</b></p>
          <p>My work spans across <b>research, devlopment, art, and leadership</b>. I combine innovation, empathy, and creativity to promote a thoughtful future with AI.</p>
        </Window>

        <Window className={indexStyles['window-small']}>
          {/* Top button as window title */}
          <button onClick={() => window.location.href = "/career"}>
            CAREER
          </button>
            <div style={{ marginTop: 10, width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/career#education"}>Education</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/career#technical-skills"}>Technical Skills</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/career#sprout-social"}>Sprout Social</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/career#american-express"}>American Express</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/career#btt-ucla"}>BTT UCLA</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/career#lab-lab"}>L.A.B. Lab</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/career#giant-food"}>Giant Food</button>
              </div>
            </div>
        </Window>

        <Window className={indexStyles['window-small']}>
          <button onClick={() => window.location.href = "/leadership"}>
            LEADERSHIP
          </button>
            <div style={{ marginTop: 10, width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/leadership#overview"}>Overview</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/leadership#featured-article"}>Featured Article</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/leadership#btt-ucla"}>BTT UCLA</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/leadership#panther-network"}>Panther Network</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/leadership#wist"}>Women in Science & Tech</button>
              </div>
            </div>
        </Window>

        <Window className={indexStyles['window-small']}>
            <button onClick={() => window.location.href = "/creations"}>
              CREATIONS
            </button>
            <div style={{ marginTop: 10, width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/creations#main-content"}>Main Content</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/creations#sustainable-fashion"}>Sustainable Fashion</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/creations#visual-art"}>Visual Art</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/creations#creative-industries"}>Creative Industries</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/creations#educational-content"}>Educational Content</button>
                <button style={{ fontSize: '15px', padding: '6px 14px', margin: 0 }} onClick={() => window.location.href = "/creations#technical-writing"}>Technical Writing</button>
              </div>
            </div>
        </Window>



      </div>
    </Layout>
  );
};

export default HomePage;




