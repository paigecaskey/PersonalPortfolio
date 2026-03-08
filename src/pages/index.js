import Image from 'next/image';
import Link from 'next/link';
import layoutStyles from './index.layout.module.css';
import NowPlaying from '../components/NowPlaying';
import TopArtists from '../components/TopArtists';
import profile from '../images/profile.png';
import dividerSticker from '../images/stickers/divider.gif';
import flowerSticker from '../images/stickers/flower.gif';
import onlineSticker from '../images/stickers/online.gif';
import starSticker from '../images/stickers/star.gif';
import welcomeBannerSticker from '../images/stickers/welcome_banner.gif';


const HomePage = () => {
  return (
    <div className={layoutStyles.homeContainer}>
        <div className={layoutStyles.homeStickerLayer} aria-hidden="true">
          <Image src={dividerSticker} alt="" className={`${layoutStyles.homeDivider} ${layoutStyles.homeDividerTop}`} />
          <Image src={dividerSticker} alt="" className={`${layoutStyles.homeDivider} ${layoutStyles.homeDividerBottom}`} />
          <Image src={welcomeBannerSticker} alt="" className={`${layoutStyles.homeSticker} ${layoutStyles.stickerWelcome}`} />
          <Image src={flowerSticker} alt="" className={`${layoutStyles.homeSticker} ${layoutStyles.stickerFlowerOne}`} />
          <Image src={flowerSticker} alt="" className={`${layoutStyles.homeSticker} ${layoutStyles.stickerFlowerTwo}`} />
          <Image src={flowerSticker} alt="" className={`${layoutStyles.homeSticker} ${layoutStyles.stickerFlowerThree}`} />
          <Image src={starSticker} alt="" className={`${layoutStyles.homeSticker} ${layoutStyles.stickerStarOne}`} />
          <Image src={starSticker} alt="" className={`${layoutStyles.homeSticker} ${layoutStyles.stickerStarTwo}`} />
          <Image src={starSticker} alt="" className={`${layoutStyles.homeSticker} ${layoutStyles.stickerStarThree}`} />
        </div>

        <div className={layoutStyles.leftSection}>
          <div className={layoutStyles.statusTicker}>
            <Image src={onlineSticker} alt="Online" className={layoutStyles.onlineNowGif} />
          </div>

          <div className={`${layoutStyles.leftTopBox} ${layoutStyles.profileBoxVariant}`}>
            <div className={`${layoutStyles.leftTitle} ${layoutStyles.titleProfile}`}>PAIGE CASKEY&apos;S PROFILE</div>
            <div className={layoutStyles.leftBoxTextBelow}>
              <p>
                Hi, I&apos;m Paige. I&apos;m an AI Scientist, futurist, and creative technologist.
              </p>
            </div>
            <div className={layoutStyles.leftBoxContent}>
              <div className={layoutStyles.leftImage}>
                <Image src={profile} alt="Paige profile photo" width={420} height={420} />
              </div>
              <div className={layoutStyles.leftBoxTextRight}>
                <p><strong>location:</strong> Los Angeles, CA</p>
                <p><strong>zodiac Sign:</strong> cancer</p>
                <p><strong>favorite book:</strong> The Singularity is Near by Ray Kurtzweil</p>
                <p><strong>currently:</strong> building things and being cool.</p>
              </div>
            </div>
          </div>

          <div className={`${layoutStyles.leftBottomBox} ${layoutStyles.linksBoxVariant}`}>
            <div className={`${layoutStyles.leftBottomTitle} ${layoutStyles.titleLinks}`}>Find Me Around The Web</div>
            <div className={layoutStyles.leftBottomListContainer}>
              <ul className={layoutStyles.leftBottomList}>
                <li data-tag="MAIL">
                  <a href="mailto:hello@example.com">email me</a>
                </li>
                <li data-tag="LINK">
                  <a href="https://www.linkedin.com/in/paige-caskey/" target="_blank" rel="noreferrer">linkedin</a>
                </li>
                <li data-tag="CODE">
                  <a href="https://github.com/paigecaskey" target="_blank" rel="noreferrer">github repos</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${layoutStyles.rightBox} ${layoutStyles.rightBoxShort} ${layoutStyles.nowPlayingBoxVariant}`}>
            <div className={`${layoutStyles.rightBoxTitle} ${layoutStyles.titleNowPlaying}`}>Now Playing</div>
            <div className={layoutStyles.rightBoxContent}>
              <div className={layoutStyles.nowPlayingContainer}>
                <NowPlaying />
              </div>
              <div className={layoutStyles.nowPlayingCaption}>
                what I&apos;m listening to on spotify
              </div>
            </div>
          </div>
        </div>

        <div className={layoutStyles.rightSection}>
          <div className={`${layoutStyles.rightBox} ${layoutStyles.rightBoxShort} ${layoutStyles.linksBoxVariant}`}>
            <div className={`${layoutStyles.rightBoxTitle} ${layoutStyles.titleLinks}`}>Tabs / Other Pages</div>
            <div className={layoutStyles.rightBoxContent}>
              <div className={layoutStyles.pageTabs}>
                <Link className={layoutStyles.pageTab} href="/career">career</Link>
                {/* ART TAB (temporarily hidden) - uncomment to restore
                <Link className={layoutStyles.pageTab} href="/art">art</Link>
                */}
                <Link className={layoutStyles.pageTab} href="/blog">blog</Link>
              </div>
            </div>
          </div>

          <div className={layoutStyles.marqueeBar}>
            <div className={layoutStyles.marqueeTrack}>
              &lt;3 hello internet &lt;3 &lt;3 hello internet &lt;3 &lt;3 hello internet &lt;3 &lt;3 hello internet &lt;3
            </div>
          </div>

          <div className={`${layoutStyles.rightBox} ${layoutStyles.rightBoxShort} ${layoutStyles.aboutBoxVariant}`}>
            <div className={`${layoutStyles.rightBoxTitle} ${layoutStyles.titleAbout}`}>About Me</div>
            <div className={layoutStyles.rightBoxContent}>
              <p>building things on the internet</p>
              <p>writing about AI &amp; technology</p>
              <p>permanently curious</p>
            </div>
          </div>

          <div className={`${layoutStyles.rightBox} ${layoutStyles.rightBoxLong} ${layoutStyles.top8BoxVariant}`}>
            <div className={`${layoutStyles.rightBoxTitle} ${layoutStyles.titleTop8}`}>Top 8 Artists</div>
            <div className={layoutStyles.rightBoxContent}>
              <TopArtists />
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;




