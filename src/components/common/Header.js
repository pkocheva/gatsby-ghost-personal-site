import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import DarkModeToggle from './DarkModeToggle'

const Header = ({ isHome }) => {

    // maybe change this SVG for another wave
    const swirl = <svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74" className="header-wave"><path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path></svg>
    const menuLinks = <p><Link to="/tag/travel">🎒Travel</Link><Link to="/dev">👩‍💻Projects</Link><Link to="/more">✨More</Link></p>;

    return (
        <>

            <header className={isHome ? "header-home" : "site-head"}>
                {isHome ? (
                    <div className="header-wrapper">
                        <div>
                            <div className="header-image">
                                <div className="header-image-wrap"><img src="/images/me.jpg" /></div>
                            </div>
                        </div>
                        <div className="header-description">
                            <div>
                                <Link to="/" className="header-title">Polina Kocheva</Link>
                                <h2>This is my blog, where I write about my <Link to="/tag/travel/">travels</Link> and <Link to="/dev/">projects.</Link><br />
                                            I work remotely and my lifestyle is semi nomadic. Find more <Link to="/more">here</Link>.</h2>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="container">
                            <nav className="site-nav">
                                <div className="header-profile">
                                    <div className="header-image">
                                        <div className="header-image-wrap"><img src="/images/me.jpg" /></div>
                                    </div>

                                    <Link to="/" className="header-title">Polina Kocheva</Link>
                                </div>

                                <div className="header-menu">
                                    {menuLinks}
                                    <DarkModeToggle />
                                </div>

                            </nav>
                        </div>
                    )}
                {isHome ? <DarkModeToggle /> : ''}

            </header>
            {isHome ? swirl : ''}
        </>
    );
}

export default Header
