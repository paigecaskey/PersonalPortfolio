import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Layout.module.css';
import dividerSticker from '../images/stickers/divider.gif';
import flowerSticker from '../images/stickers/flower.gif';
import starSticker from '../images/stickers/star.gif';
import welcomeBannerSticker from '../images/stickers/welcome_banner.gif';

const Layout = ({ children, stickersBehindContent = false }) => {
  return (
    <div className={styles.layout}>
      <div
        className={`${styles.stickerLayer} ${stickersBehindContent ? styles.stickerLayerBehind : ''}`}
        aria-hidden="true"
      >
        <Image src={dividerSticker} alt="" className={`${styles.divider} ${styles.dividerTop}`} />
        <Image src={dividerSticker} alt="" className={`${styles.divider} ${styles.dividerBottom}`} />

        <Image src={welcomeBannerSticker} alt="" className={`${styles.sticker} ${styles.welcome}`} />
        <Image src={flowerSticker} alt="" className={`${styles.sticker} ${styles.flowerOne}`} />
        <Image src={flowerSticker} alt="" className={`${styles.sticker} ${styles.flowerTwo}`} />
        <Image src={flowerSticker} alt="" className={`${styles.sticker} ${styles.flowerThree}`} />
        <Image src={starSticker} alt="" className={`${styles.sticker} ${styles.starOne}`} />
        <Image src={starSticker} alt="" className={`${styles.sticker} ${styles.starTwo}`} />
        <Image src={starSticker} alt="" className={`${styles.sticker} ${styles.starThree}`} />
      </div>

      <div className={styles.homeButtonWrap}>
        <Link href="/" className={styles.homeButton}>HOME</Link>
      </div>
      <div className={styles.pageContent}>
        {children}
      </div>
    </div>
  );
};

export default Layout;









