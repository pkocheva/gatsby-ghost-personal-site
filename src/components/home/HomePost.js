import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const HomePost = ({ post }) => {
    const url = `/${post.slug}/`    

    return (
        <h2 className="home-post">
            <Link to={url}>
                {post.title} &rarr;
            </Link>
        </h2>
    )
}

HomePost.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
}

export default HomePost
