import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

class HomeNewsletter extends Component { 
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
        this.state = { 
            buttonText: 'Subscribe',
            buttonStyles: {},
            buttonIsDisabled: false, 
            error: false, 
            errorMessage: '',
        }
      }

    //const [email, setEmail] = useState("")
    //const [submitted, setSubmitted] = useState(false)

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.input.current.value)
        addToMailchimp(this.input.current.value) // listFields are optional if you are only capturing the email address.
        .then(data => {        
            console.log(data)
            if(data.result==='error') {
                this.setState({
                    error: true, 
                    errorMessage: data.msg,
                });                           
            } else {
                this.setState({
                    buttonText: 'Thank you! ❤️',
                    buttonStyles: {background: '#4f4db3'},
                    buttonIsDisabled: true,
                    error: false,
                    errorMessage: ''
                });
            }
        })
        .catch(() => {
            alert("error!");
            // unnecessary because Mailchimp only ever
            // returns a 200 status code
            // see below for how to handle errors
          })
    }
    

    render() {
        return (
            <div className="home-section home-box big-box" id="home-newsletter">
                <h2 className="home-title">💌 Follow my journey</h2>

                <div id="mc_embed_signup">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <p style={{fontSize: '2.5rem', fontWeight: '300'}}>I send monthly emails about my projects, my travels, and new posts on this blog. Sign up to follow me.</p>
                            <div>
                                <input ref={this.input} type="email" className="newsletter-email" placeholder="Your Email" />
                                <div className="newsletter-error-message">{this.state.errorMessage}</div>
                            </div>
                            <button style={this.state.buttonStyles} disabled={this.state.buttonIsDisabled} className="newsletter-subscribe button">{this.state.buttonText}</button>
                        </div>
                    </form>
                </div>

                
            </div>
        )
    }
}

export default HomeNewsletter
