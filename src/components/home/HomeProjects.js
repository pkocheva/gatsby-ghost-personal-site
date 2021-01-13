import React from 'react'
import { Link } from 'gatsby'

const HomeProjects = () => {

    return (
        <div className="home-section home-box big-box">
        <div className="home-projects">
            <h2 className="home-title">Projects &amp; Experiments</h2>
            <div className="home-project">
                <img src="https://whereis.today/logo-color-small.png" />
                <h3>WhereIs.Today</h3>

                <p>
                    A widget that you can embed anywhere on your wesbite to show where you are right now, where you're going next and in how many days. (Like the box above on this page!)
            </p>
            </div>
        </div>
    </div>
    )
}

export default HomeProjects
