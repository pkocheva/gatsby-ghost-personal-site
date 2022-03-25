import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const HomeNewsletter = ({ post }) => { 

    return (
        <div class="home-section home-box big-box">
            <h2 class="home-title">💌 Follow my journey</h2>

            <div id="mc_embed_signup" class="">
                <form action="https://polinakocheva.us14.list-manage.com/subscribe/post?u=82f93ecc415a8369e1e1b92ae&amp;id=54bd4dd3cf" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
                    <div id="mc_embed_signup_scroll" >
                        <p style={{fontSize: '2.5rem', fontWeight: '300'}}>I send monthly emails about my projects, my travels, and new posts on this blog. Sign up to follow me.</p>
                        <div class="mc-field-group">
                            <input type="email" value="" name="EMAIL" class="newsletter-email" id="mce-EMAIL" placeholder="Your Email" />
                        </div>
                        <div hidden="true"><input type="hidden" name="tags" value="7260782" /></div>
                        <div id="mce-responses" class="clear foot">
                            <div class="response" id="mce-error-response" style={{display:'none'}}></div>
                            <div class="response" id="mce-success-response" style={{display:'none'}}></div>
                        </div>    
                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_82f93ecc415a8369e1e1b92ae_54bd4dd3cf" tabindex="-1" value="" /></div>
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="newsletter-subscribe button" />
                
                    </div>
                </form>
            </div>

            
        </div>
    )
}

HomeNewsletter.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
}

export default HomeNewsletter
