import React from 'react';
import Layout from '../components/Layout';
import blogStyles from './blog.module.css';
import SubstackBlogFeed from '../components/SubstackBlogFeed';

const BlogPage = () => {
  return (
    <Layout stickersBehindContent>
      <div className={blogStyles.blogPage}>
        <div className={blogStyles.header}>
          <h1 className={blogStyles.title}>Latest Writing</h1>
          <p className={blogStyles.subtitle}>
            New posts are pulled from Substack automatically whenever an article is published.
          </p>
        </div>
        <SubstackBlogFeed limit={6} />
      </div>
    </Layout>
  );
};

export default BlogPage;


