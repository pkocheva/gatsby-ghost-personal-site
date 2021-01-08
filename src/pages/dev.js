
import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from '../components/common/ThemeContext';

import './dev.scss'

const WorkPage = ({ data }) => {
    console.log(data);
    const posts = data.allGhostPost.edges;

    console.log(posts);

    const postsHtml = <div className="dev-grid">
        {posts.map(
            (post) => {
                return <Link to={post.node.slug}  className="dev-post">
                    <h2 className="dev-title">{post.node.title}</h2>
                    <p className="dev-excerpt">{post.node.excerpt}</p>
                    <div>Read more</div>
                </Link>
            })
        }
    </div>

    console.log(postsHtml);

    return (
        <ThemeProvider>
            <GlobalStyles />

            <Layout>
                <div className="container">
                    <header className="tag-header">
                        <h1>Coding Stuff</h1>
                    </header>
                    {postsHtml}
                </div>
            </Layout>
        </ThemeProvider>
    )
}

export const query = graphql`
query {
    allGhostPost(filter: {tags: {elemMatch: {slug: {eq: "dev"}}}}) {
      edges {
        node {
            ...GhostPostFields
            }
      }
    }
  }
`


export default WorkPage