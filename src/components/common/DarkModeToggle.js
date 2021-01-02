import React, { Component } from "react"

class DarkModeToggle extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            darkModeOn: false
        };
    }

    handleChange() {
        if (!this.state.darkModeOn) document.body.classList.add('dark');
        else document.body.classList.remove('dark');

        this.state = {
            darkModeOn: !this.state.darkModeOn
        };

        document.getElementById("darkModeToggle").checked = this.state.darkModeOn;
        window.localStorage.setItem('darkmode', JSON.stringify(this.state.darkModeOn));
    }

    componentDidMount() {
        console.log('mount')

        const localStorageDarkMode = window.localStorage.getItem('darkmode');

        if (localStorageDarkMode) {

            if (localStorageDarkMode === 'true') {
                console.log('ADD DARK')
                setTimeout(() => document.body.classList.add('dark'), 100);
            }

            this.setState({
                darkModeOn: localStorageDarkMode === 'true' ? true : false
            }, () => {
                document.getElementById("darkModeToggle").checked = this.state.darkModeOn
            });
        }
        

    }

    render() {
        return (
            <div className="darkModeToggle">
                <input id="darkModeToggle" type="checkbox" onClick={this.handleChange}/>
                <label for="darkModeToggle" className="check-trail">
                    <span className="check-handler"></span>
                </label>
            </div>
        )
    }
}

export default DarkModeToggle