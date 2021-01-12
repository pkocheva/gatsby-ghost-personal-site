import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { ThemeContext } from './ThemeContext'

import { Navigation } from '.'
import DarkModeToggle from './DarkModeToggle'
import config from '../../utils/siteConfig'

import { ThemeProvider } from './ThemeContext';

// Styles
import '../../styles/app.scss'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

    const menuLinks = <p><Link to="/tag/travel">🎒Travel</Link><Link to="/dev">👩‍💻Projects</Link><Link to="/more">✨More</Link></p>;

    // maybe change this SVG for another wave
    const swirl = <svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74" className="header-wave"><path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path></svg>


    return (
        <>

            <Helmet>
                <html lang={site.lang} />
                <body className={''} />
            </Helmet>

            <ThemeProvider>

                <div className="viewport">

                    <div className="viewport-top">

                        {/* The main header section on top of the screen */}

                        <header className={isHome ? "header-home" : "site-head"}>
                            {isHome ? (
                                <div className="header-wrapper">
                                    <div>
                                        <div className="header-image">
                                            <div className="header-image-wrap"><img src="/images/me.jpg" /></div>
                                        </div>
                                        <Link to="/" className="header-title">Polina Kocheva</Link>
                                    </div>
                                    <div className="header-description">
                                        <div>
                                            <h1>Hi 👋 I am a <strong>developer</strong>.</h1>
                                            <h2>This is my blog. I write about my <Link to="/tag/travel/">travels</Link> and <Link to="/dev/">side projects.</Link><br />
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


                                            {/* <Navigation data={site.navigation} navClass="site-nav-item" /> */}

                                        </nav>
                                    </div>
                                )}
                            {isHome ? <DarkModeToggle /> : ''}

                        </header>
                        {isHome ? swirl : ''}

                        {/*
                <header className="site-head">
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">
                                <Link to="/">
                                    {site.logo ?
                                        <img className="site-logo" src={site.logo} alt={site.title} />
                                        : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                    }
                                </Link>
                            </div>
                            <div className="site-mast-right">
                                { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}
                                <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
                            </div>
                        </div>
                        { isHome ?
                            <div className="site-banner">
                                <h1 className="site-banner-title">{site.title}</h1>
                                <p className="site-banner-desc">{site.description}</p>
                            </div> :
                            null}
                        <nav className="site-nav">
                            <div className="site-nav-left">
                */}

                        {/* The navigation items as setup in Ghost */}
                        {/*}
                            <Navigation data={site.navigation} navClass="site-nav-item" />
                            </div>
                            <div className="site-nav-right">
                                <Link className="site-nav-button" to="/about">About</Link>
                            </div>
                        </nav>
                    </div>
                </header>
                */}



                        <main className="site-main">
                            {/* All the main content gets inserted here, index.js, post.js */}
                            {children}
                        </main>

                    </div>

                    <div className="viewport-bottom">

                        <footer className="site-footer outer">
                            <div className="site-footer-content inner">
                                <p className="footer-icons">
                                    <a href="https://www.linkedin.com/in/polinakocheva/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" width="30px" height="30px">
                                            <rect y="160" width="114.496" height="352" fill="#FFFFFF" />
                                            <path d="M426.368,164.128c-1.216-0.384-2.368-0.8-3.648-1.152c-1.536-0.352-3.072-0.64-4.64-0.896    c-6.08-1.216-12.736-2.08-20.544-2.08c-66.752,0-109.088,48.544-123.04,67.296V160H160v352h114.496V320    c0,0,86.528-120.512,123.04-32c0,79.008,0,224,0,224H512V274.464C512,221.28,475.552,176.96,426.368,164.128z" fill="#FFFFFF" />
                                            <circle cx="56" cy="56" r="56" fill="#FFFFFF" />
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com/polina.bcn" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" width="30px" height="30px">
                                            <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160    C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48    h192c61.76,0,112,50.24,112,112V352z" fill="#FFFFFF" />
                                            <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336    c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z" fill="#FFFFFF" />
                                            <circle cx="393.6" cy="118.4" r="17.056" fill="#FFFFFF" />
                                        </svg>
                                    </a>
                                    <a href="https://codepen.io/polinakocheva/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 31.665 31.665" >
                                            <path d="M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444   c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086   v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z    M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215   l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215   V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z" fill="#FFFFFF" />
                                        </svg>
                                    </a>
                                    <a href="https://github.com/pkocheva" target="_blank">
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            width="30px" height="30px" viewBox="0 0 438.549 438.549"
                                        >
                                            <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
                                        c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
                                        c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
                                        c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
                                        c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
                                        c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
                                        c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
                                        c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
                                        c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
                                        c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
                                        c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
                                        c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
                                        c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
                                        c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
                                        c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
                                        c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
                                        c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
                                        c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
                                        c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
                                        C438.536,184.851,428.728,148.168,409.132,114.573z"  fill="#FFFFFF" />
                                        </svg>

                                    </a>
                                    <a href="mailto:_p.kocheva@gmail.com" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 550.795 550.795" >
                                            <path d="M501.613,491.782c12.381,0,23.109-4.088,32.229-12.16L377.793,323.567c-3.744,2.681-7.373,5.288-10.801,7.767    c-11.678,8.604-21.156,15.318-28.434,20.129c-7.277,4.822-16.959,9.737-29.045,14.755c-12.094,5.024-23.361,7.528-33.813,7.528    h-0.306h-0.306c-10.453,0-21.72-2.503-33.813-7.528c-12.093-5.018-21.775-9.933-29.045-14.755    c-7.277-4.811-16.75-11.524-28.434-20.129c-3.256-2.387-6.867-5.006-10.771-7.809L16.946,479.622    c9.119,8.072,19.854,12.16,32.234,12.16H501.613z" fill="#FFFFFF" />
                                            <path d="M31.047,225.299C19.37,217.514,9.015,208.598,0,198.555V435.98l137.541-137.541    C110.025,279.229,74.572,254.877,31.047,225.299z" fill="#FFFFFF" />
                                            <path d="M520.059,225.299c-41.865,28.336-77.447,52.73-106.75,73.195l137.486,137.492V198.555    C541.98,208.396,531.736,217.306,520.059,225.299z" fill="#FFFFFF" />
                                            <path d="M501.613,59.013H49.181c-15.784,0-27.919,5.33-36.42,15.979C4.253,85.646,0.006,98.97,0.006,114.949    c0,12.907,5.636,26.892,16.903,41.959c11.267,15.061,23.256,26.891,35.961,35.496c6.965,4.921,27.969,19.523,63.012,43.801    c18.917,13.109,35.368,24.535,49.505,34.395c12.05,8.396,22.442,15.667,31.022,21.701c0.985,0.691,2.534,1.799,4.59,3.269    c2.215,1.591,5.018,3.61,8.476,6.107c6.659,4.816,12.191,8.709,16.597,11.683c4.4,2.975,9.731,6.298,15.985,9.988    c6.249,3.685,12.143,6.456,17.675,8.299c5.533,1.842,10.655,2.766,15.367,2.766h0.306h0.306c4.711,0,9.834-0.924,15.368-2.766    c5.531-1.843,11.42-4.608,17.674-8.299c6.248-3.69,11.572-7.02,15.986-9.988c4.406-2.974,9.938-6.866,16.598-11.683    c3.451-2.497,6.254-4.517,8.469-6.102c2.057-1.476,3.605-2.577,4.596-3.274c6.684-4.651,17.1-11.892,31.104-21.616    c25.482-17.705,63.01-43.764,112.742-78.281c14.957-10.447,27.453-23.054,37.496-37.803c10.025-14.749,15.051-30.22,15.051-46.408    c0-13.525-4.873-25.098-14.598-34.737C526.461,63.829,514.932,59.013,501.613,59.013z" fill="#FFFFFF" />
                                        </svg>
                                    </a>
                                </p>
                                <p>Site made with <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a> and <a href="https://github.com/TryGhost" target="_blank">Ghost</a> on <a href="https://netlify.com" target="_blank">Netlify</a> and <a href="https://digitalocean.com" target="_blank">Digital Ocean</a>. <br /> <a href="https://github.com/pkocheva/gatsby-ghost-personal-site" target="_blank">View source.</a></p>



                            </div>
                        </footer>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
