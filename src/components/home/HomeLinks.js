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
                <Link to="/art/">
                    <div className="home-links-art" data-tip="Coming soon">🎨<br />Art</div>
                </Link>
                <div className="home-links-projects" data-tip="Coming soon">💡<br />Projects</div>
            </div>
        </div>
    )
}

export default HomeLinks
