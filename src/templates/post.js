import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from '../components/common/ThemeContext';

import Prism from "prismjs";

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost

    const tags = post.tags;
    const tagsHtml = <div className="post-tags">{ tags.map((tag) => {return <Link to={'/tag/' + tag.slug} className="post-tag">{tag.name}</Link>}) }</div>

    // JS from Casper to make galleries work
    useEffect(() => {
        var images = document.querySelectorAll('.kg-gallery-image img');
        images.forEach(function (image) {
            var container = image.closest('.kg-gallery-image');
            var width = image.attributes.width.value;
            var height = image.attributes.height.value;
            var ratio = width / height;
            container.style.flex = ratio + ' 1 0%';
        })
        Prism.highlightAll()
    });

    return (
        <>
            <ThemeProvider>
                <GlobalStyles />
                <MetaData
                    data={data}
                    location={location}
                    type="article"
                />
                <Layout>
                    <div className="container narrow">
                        <article className="content">
                            <h1 className="post-full-title">{post.title}</h1>
                            {tagsHtml}
                            {post.feature_image ?
                                <figure className="post-feature-image">
                                    <img src={post.feature_image} alt={post.title} />
                                </figure> 
                            : null}
                            <section className="post-full-content">

                                {/* The main post content */}
                                <section
                                    className="content-body load-external-scripts"
                                    dangerouslySetInnerHTML={{ __html: post.html }}
                                />
                            </section>
                        </article>
                    </div>
                </Layout>
            </ThemeProvider>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
