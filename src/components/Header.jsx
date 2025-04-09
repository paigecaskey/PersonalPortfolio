import React from 'react';
import Link from 'next/link';
import headerStyles from './Header.module.css';

const Header = () => {
  return (
    <div className={`window ${headerStyles.window}`}>
      <div className={`title-bar ${headerStyles.customtitlebar}`}>
        <div className="title-bar-text">
        <Link href="/" className={headerStyles.link}>
          <button className={headerStyles.custombutton}>HOME</button>
        </Link>
        <Link href="/about" className={headerStyles.link}>
          <button className={headerStyles.custombutton}>ABOUT</button>
        </Link>
        <Link href="/portfolio" className={headerStyles.link}>
          <button className={headerStyles.custombutton}>PROJECTS</button>
        </Link>
        <a
          href="https://medium.com/@paigecaskey"
          target="_blank"
          rel="noopener noreferrer"
          className={headerStyles.link}
        >
          <button className={headerStyles.custombutton}>BLOG</button>
        </a>
        </div>
        <div className="title-bar-controls">
        <button aria-label="Minimize" className={headerStyles.custombutton}></button>
          <button aria-label="Maximize" className={headerStyles.custombutton}></button>
          <button aria-label="Close" className={headerStyles.custombutton}></button>
          </div>
      </div>
    </div>
  );
};

export default Header;
