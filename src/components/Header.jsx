import React from 'react';
import Link from 'next/link';
import headerStyles from './Header.module.css';


const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className = {headerStyles.nameContainer}>
      <Link href="/"><h1 className={headerStyles.name}>HOME</h1></Link>
      </div>
      <nav>
        <ul className={headerStyles.navLinks}>
          <li className={headerStyles.navItem}>
            <Link href="/about">
              ABOUT
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link href="/portfolio">
              PORTFOLIO
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
