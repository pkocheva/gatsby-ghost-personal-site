import React from 'react'
import { Link } from 'gatsby'

const HomeLinks = () => {

    return (
        <div className="home-section home-box big-box">
            <div className="home-links">
                <h2 className="home-title">What I do</h2>
                <p>
                </p>
                <a href="/work/">
                    <div className="home-links-work">💻<br />Work</div>
                </a>
                <a href="/tag/travel/">
                    <div className="home-links-travel">✈️<br />Travel</div>
                </a>
                <a href="/art/">
                    <div className="home-links-art">🎨<br />Art</div>
                </a>
                <div className="home-links-projects" data-tip="Coming soon">💡<br />Projects</div>
            </div>
        </div>
    )
}

export default HomeLinks
