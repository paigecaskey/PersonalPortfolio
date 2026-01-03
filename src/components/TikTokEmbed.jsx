import React from 'react';

const TikTokEmbed = ({ videoId, username }) => {
  if (!videoId || !username) return null;
  const embedUrl = `https://www.tiktok.com/embed/v2/${videoId}`;
  return (
    <iframe
      src={embedUrl}
      title="TikTok video embed"
      width="325"
      height="575"
      allow="autoplay; encrypted-media"
      allowFullScreen
      style={{ border: 'none', borderRadius: '12px' }}
    />
  );
};

export default TikTokEmbed;
