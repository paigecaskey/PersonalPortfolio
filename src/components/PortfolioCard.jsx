import React from 'react';
import PropTypes from 'prop-types';
import styles from '../pages/portfolio.module.css';

const PortfolioCard = ({ imageSrc, title, description, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Card Image" className={styles.cardImage} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <h3>Click to View</h3>
          </a>
        )}
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default PortfolioCard;
