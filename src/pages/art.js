import React from 'react';
import Layout from '../components/Layout';
import artStyles from './art.module.css';
import DeviantArtGallery from '../components/DeviantArtGallery';

const ArtPage = () => {
  return (
    <Layout>
      <div className={artStyles.collage}>
        <DeviantArtGallery limit={9} />
      </div>
    </Layout>
  );
};

export default ArtPage;