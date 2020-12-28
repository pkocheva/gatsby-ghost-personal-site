import React from 'react'
import { Link } from 'gatsby'

const HomeLinks = () => {

    return (
        <div className="home-section home-box big-box">
            <div className="home-links">
                <h2 className="home-title">What I do</h2>
                <p>
                </p>
                <Link to="/work/">
                    <div className="home-links-work">💻<br />Work</div>
                </Link>
                <Link to="/tag/travel/">
                    <div className="home-links-travel">✈️<br />Travel</div>
                </Link>
                <a href="https://www.instagram.com/pbk_art/" target="_blank">
                    <div className="home-links-art">🎨<br />Art</div>
                </a>
                <div className="home-links-projects" data-tip="Coming soon">💡<br />Projects</div>
            </div>
        </div>
    )
}

export default HomeLinks
