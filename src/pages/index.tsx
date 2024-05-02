import React from 'react';
import { Link, graphql } from 'gatsby';
import parse from 'html-react-parser';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/scss/style.scss';

interface Post {
  excerpt: string;
  uri: string;
  date: string;
  title: string;
}

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}: {
  data: { allWpPost: { nodes: Post[] } };
  pageContext: { nextPagePath?: string; previousPagePath?: string };
}) => {
  const posts = data.allWpPost.nodes;

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title='All posts' />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    );
  }

  return (
    <Layout isHomePage>
      <Seo title='All posts' />

      <Bio />

      <h1 className='text-3xl font-bold underline'>Hello world!</h1>

      {posts.map((post) => (
        <div key={post.uri}>
          <p>{post.title}</p>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </div>
      ))}

      {/* <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.title;

          return (
            <li key={post.uri}>
              <article
                className='post-list-item'
                itemScope
                itemType='http://schema.org/Article'
              >
                <header>
                  <h2>
                    <Link to={post.uri} itemProp='url'>
                      <span itemProp='headline'>{parse(title)}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section itemProp='description'>{parse(post.excerpt)}</section>
              </article>
            </li>
          );
        })}
      </ol> */}
      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    allWpPost(sort: { date: DESC }) {
      nodes {
        date(formatString: "MMM DD, YYYY")
        id
        title
        uri
        excerpt
      }
    }
  }
`;

export default BlogIndex;
