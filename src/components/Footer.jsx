import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import githubIcon from '../images/github.png'; 
import emailIcon from '../images/email.png';
import linkedinIcon from '../images/linkedin.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.navLinks}>
      <li className={styles.navItem}>
          <a href="https://www.linkedin.com/in/paige-caskey/">
            <Image src={linkedinIcon} alt="LinkedIn" />
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="https://github.com/paigecaskey">
            <Image src={githubIcon} alt="GitHub" />
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="mailto:paigecaskey@gmail.com">
            <Image src={emailIcon} alt="Email" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
