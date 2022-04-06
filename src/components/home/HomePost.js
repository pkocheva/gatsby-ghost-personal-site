import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const HomePost = ({ post }) => {
    const url = `/${post.slug}/`
    const tagUrl = `/tag/${post.primary_tag.slug}/`     
    console.log(post)

    return (
        <>
            <a href={tagUrl} className="home-tag">{post.primary_tag.name}</a>
            <h2 className="home-post">
                
                <Link to={url}>
                    {post.title} &rarr;
                </Link>
            </h2>
        </>
    )
}

HomePost.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
}

export default HomePost
