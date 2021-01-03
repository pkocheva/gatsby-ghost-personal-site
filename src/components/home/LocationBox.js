import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import moment from 'moment'
import axios from 'axios';

class LocationBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCity: '---',
            nextCity: '---',
            daysRemaining: '--'
        };
      }

    componentDidMount() {
        axios.get('https://nomadlist.com/@polinakocheva.json').then(res => {

            if(res?.data?.location?.now?.city && res?.data?.location?.now?.country) {
                this.setState ({
                    currentCity: res.data.location.now.city + ', ' + res.data.location.now.country
                });
            }
          
            if(res?.data?.location?.next && res.data.location.next.city && res?.data?.location?.next.country) {
                this.setState ({
                    nextCity: res.data.location.next.city + ', ' + res?.data?.location?.next.country
                });
            }
          
            if(res?.data?.location?.next && res?.data?.location?.next.date_start) {
              var currentDate = moment();
              var fromDate = moment(res.data.location.next.date_start, 'YYYY-MM-DD').toDate();
              var daysRemaining = Math.abs(currentDate.diff(fromDate, 'days'));
              this.setState({
                  daysRemaining 
              })
            
            }
        })
    }


    render() {
        return (
            <div className="home-box location-box">
                <div className="location-box-inner">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60 60" >
                    <path d="M29.823,54.757L45.164,32.6c5.754-7.671,4.922-20.28-1.781-26.982C39.761, 1.995,34.945,0,29.823,0s-9.938,1.995-13.56,5.617c-6.703,6.702-7.535,19.311-1.804,26.952L29.823,54.757z M30,12c3.86,0,7,3.141,7,7s-3.14,7-7,7s-7-3.141-7-7S26.14,12,30,12z"></path>
                </svg>
                    <p>
                        <span className="home-title location-box-title">Currently in</span><br />
                        <span id="current-city">{ this.state.currentCity }</span>
                    </p>
                    <p id="leaving-for">
                        <span className="home-title location-box-title">Leaving for</span><br />
                        <span id="next-city">{ this.state.nextCity }</span><br />
                        in <span id="next-city-time">{ this.state.daysRemaining }</span> days
                    </p>
                    <p className="location-box-footer">Data from <a href="https://nomadlist.com/@polinakocheva" target="_blank">Nomadlist</a></p>                
                </div>
            </div>
        )
    }
}

export default LocationBox
