import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <div className="post-card">
                        {post.feature_image &&
                    <Link to={url} className="post-card-image-link">
                        <div className="post-card-image" style={{
                            backgroundImage: `url(${post.feature_image})` ,
                        }}></div>
                    </Link>}
        <div className="post-card-content">
            <Link to={url} className="post-card-content-link">
            <header className="post-card-header">
                {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                {post.featured && <span>Featured</span>}
                
            
                <h2 className="post-card-title">{post.title}</h2>
                </header>
                <section className="post-card-excerpt">{post.excerpt.substr(0,140) + '...'}</section>
                </Link>
            </div>

            <footer className="post-card-meta">
                <div className="reading-time">
                    <div>{readingTime}</div>
                </div>
            </footer>
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
