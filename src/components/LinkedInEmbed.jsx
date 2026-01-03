import { useEffect } from 'react';

const LinkedInEmbed = ({ postUrl }) => {
  // Convert URL to iframe embed format
  const getEmbedUrl = (url) => {
    // Extract activity ID from various URL formats
    const activityMatch = url.match(/urn:li:activity:(\d+)/);
    if (activityMatch) {
      return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityMatch[1]}`;
    }
    return url;
  };

  return (
    <iframe
      src={getEmbedUrl(postUrl)}
      width="100%"
      height="700"
      style={{
        maxWidth: '500px',
        border: 'none',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
      title="LinkedIn Post"
      allowFullScreen
    />
  );
};

export default LinkedInEmbed;