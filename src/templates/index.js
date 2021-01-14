import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Prism from 'prismjs'

import { Layout } from '../components/common'
import HomeMap from '../components/home/HomeMap'
import HomePost from '../components/home/HomePost'
import LocationBox from '../components/home/LocationBox'
import HomeProjects from '../components/home/HomeProjects'
import { MetaData } from '../components/common/meta'

import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from '../components/common/ThemeContext';

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <ThemeProvider>
                <GlobalStyles />
                <MetaData location={location} />
                <Layout isHome={true}>

                    <div className="container">

                        <div className="home-section home-grid">
                            <LocationBox />

                            <div className="home-box">
                                <h2 className="home-title">Recent Posts</h2>

                                {posts.slice(0, 3).map(({ node }) => (
                                    <HomePost key={node.id} post={node} />
                                ))}
                            </div>
                        </div>

                        <HomeProjects />

                        <div className="home-section home-box big-box">
                            <h2 className="home-title">My map</h2>
                            <p>
                                Some of the places that I've travelled to / lived in.
                            <br />
                                The <span className="pink">pink</span> ones link to blog posts about the place - click to read!
                            </p>
                        </div>

                        <HomeMap />

                    </div>
                </Layout>
            </ThemeProvider>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`