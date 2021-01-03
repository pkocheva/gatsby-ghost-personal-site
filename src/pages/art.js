
import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'
import Feed from "react-instagram-authless-feed"

import './art.scss'

const ArtPage = () => (
    <Layout>
        <div className="container">
            <p>See more on <a href="https://www.instagram.com/pbk_art/" target="_blank">Instagram</a>.</p>
            <Feed userName="pbk_art" className="Feed" classNameLoading="Loading" /> 
        </div>
    </Layout>
)

export default ArtPage