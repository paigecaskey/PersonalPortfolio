import React from 'react';
import PropTypes from 'prop-types';
import styles from '../pages/leadership.module.css';

const LeadershipCard = ({ title, description, link, tags }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <div className = {styles.buttonAndTags}>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <h3>CLICK TO VIEW</h3>
            </a>
          )}
            <p className = {styles.tags}>{tags}</p>
          </div>
      </div>
    </div>
  );
};

LeadershipCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  tags: PropTypes.string,
};

export default LeadershipCard;
