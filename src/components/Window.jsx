import React from 'react';
import styles from './Window.module.css';

const Window = ({ title, children, className = '' }) => {
  return (
    <div className={`window ${styles.window} ${className}`}>
      <div className="title-bar">
        <div className={`title-bar-text ${styles.titlebartext}`}>{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className={`window-body ${styles.windowbody}`}>
        {children}
      </div>
    </div>
  );
};

export default Window;