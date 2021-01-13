import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


import { Navigation, Footer, Header } from '.'
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
                        <Header isHome={isHome} />

                        <main className="site-main">
                            {/* All the main content gets inserted here, index.js, post.js */}
                            {children}
                        </main>

                    </div>

                    <div className="viewport-bottom">
                        <Footer />
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
