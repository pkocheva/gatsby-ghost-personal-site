
import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'
import Feed from "react-instagram-authless-feed"

import './art.scss'

const ArtPage = () => (
    <Layout>
        <div className="container art">
            <h1>Digital Paintings</h1>
            <img className="art-image" src="/images/vitosha-forest-hut.jpg" />
            <img className="art-image" src="/images/calm.jpg" />
            <img className="art-image" src="/images/flower-shop.jpg" />
            <img className="art-image" src="/images/willow-tree-island-house.jpg" />
            {/*<Feed userName="pbk_art" className="Feed" classNameLoading="Loading" /> */}
            <p className="art-see-more">See more on <a href="https://www.instagram.com/pbk_art/" target="_blank">Instagram</a>.</p>
        </div>
    </Layout>
)

export default ArtPage