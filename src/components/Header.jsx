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
        <Link href="/career" className={headerStyles.link}>
          <button className={headerStyles.custombutton}>CAREER</button>
        </Link>
        <Link href="/leadership" className={headerStyles.link}>
          <button className={headerStyles.custombutton}>LEADERSHIP</button>
        </Link>
        <Link href="/creations" className={headerStyles.link}>
          <button className={headerStyles.custombutton}>CREATIONS</button>
        </Link>
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
