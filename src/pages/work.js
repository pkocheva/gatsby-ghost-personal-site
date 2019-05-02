
import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const WorkPage = () => (
    <Layout>
        <div className="container">
            <h1>Work</h1>
            <div className="home-section" style={{paddingTop: '0'}}>
                <div className="tools-wrap">
                    <div id="tools-dev" className="home-tools-imgs">
                        <img alt="Gatsby" src="/images/gatsby.png" />
                        <img alt="React" src="/images/react.png" />
                        <img alt="Angular" src="/images/angular.png" />
                        <img alt="Typescript" src="/images/typescript.png" />
                        <img alt="Sass" src="/images/sass.png" />
                        <img alt="PHP" src="/images/php.png" />
                        <img alt="VSCode" src="/images/vscode.png" />
                        <img alt="Git" src="/images/git.png" />
                    </div>
                </div>
            </div>
            <p style={{
                maxWidth: 'none', 
                fontSize: '3rem'
                    }}>
            I'm currently a front-end dev consultant at White Hat Gaming. Previously I freelanced for two years, and before that I was with eDreams - Europe's biggest online travel agency. Find out more on my <a href="https://www.linkedin.com/in/polinakocheva/" target="_blank">Linkedin</a>.
            </p>        
        </div>
    </Layout>
    )

export default WorkPage