
import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const WorkPage = () => (
    <Layout>
        <div className="container">
            <div className="home-section" style={{ paddingTop: '0' }}>
                <div className="tools-wrap">
                    <div id="tools-dev" className="home-tools-imgs">
                        <h1>Work</h1>
                        <img alt="Angular" src="/images/angular.png" />
                        <img alt="Typescript" src="/images/typescript.png" />
                        {/* <img alt="React" src="/images/react.png" /> */}
                        <img alt="Sass" src="/images/sass.png" />
                        <img alt="VSCode" src="/images/vscode.png" />
                        {/* <img alt="Git" src="/images/git.png" /> */}
                    </div>
                </div>
            </div>
            <p style={{
                maxWidth: 'none',
                fontSize: '3rem'
            }}>
                I'm currently a Senior Front End Developer building payment products at White Hat Gaming with Angular. Previously I was a freelancer, and before that I was with eDreams - Europe's biggest online travel agency. Find out more on my <a href="https://www.linkedin.com/in/polinakocheva/" target="_blank">Linkedin</a>.
            </p>
        </div>
    </Layout>
)

export default WorkPage