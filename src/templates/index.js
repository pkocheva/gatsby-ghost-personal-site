import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'
import { HomePost, LocationBox, HomeLinks, HomeMap } from '../components/home'
import { MetaData } from '../components/common/meta'

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
            <MetaData location={location} />
            <Layout isHome={true}>

                <div className="container">
                
                    <div className="home-section home-grid">
                        <LocationBox />

                        <div className="home-box">
                            <h2 className="home-title">Recent Posts</h2>

                            {posts.slice(0, 5).map(({ node }) => (
                                    <HomePost key={node.id} post={node} /> 
                                ))}
                        </div>
                    </div>

                    <HomeLinks />
                    <div class="home-section home-box big-box">
                    <h2 class="home-title">On the map</h2>
                    <p>
                        Some of the places that I've travelled to / lived in. <br />
                    </p>
                    </div>

                    <HomeMap />
                    {/* 
                
                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                    */}

                    {/* <Pagination pageContext={pageContext} /> */}
                </div>
            </Layout>
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