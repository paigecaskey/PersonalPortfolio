import Layout from '../components/Layout';
import Image from 'next/image';
import indexStyles from './index.module.css';
import NowPlaying from '../components/NowPlaying';
import avatar from '../images/avatar.png'; 

const HomePage = () => {
  return (
    <Layout>
      <div className={`window ${indexStyles.window}`}>
        <div className="title-bar">
        <div className={`title-bar-text ${indexStyles.titlebartext}`}>PAIGE CASKEY</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
          </div>
      </div>
      <div className={`window-body ${indexStyles.windowbody}`}>
          <h2>WELCOME TO MY WEBSITE!!!! :P</h2>
          <p>I DO SO MANY THINGS LIKE..</p>
          <ul>
            <li>DATA SCIENCE</li>
            <li>ANALYTICS</li>
            <li>MACHINE LEARNING AND AI</li>
            <li>WEB DEVELOPMENT</li>
          </ul>
          <NowPlaying />
          <p className={indexStyles.playingcaption}>what I'm listening to on spotify rn!!!</p>
      </div>
      <div className={indexStyles.avatar}>
            <Image src={avatar} alt="GitHub" />
      </div>
      </div>
    </Layout>
  );
};

export default HomePage;




