//erin started tues 12/5 icons 12/6
import React, { Component } from 'react';
import fbIcon from './../Assets/facebook-icon.png';
import liIcon from './../Assets/linkedin-icon.png';
import ghIcon from './../Assets/github-icon.png';

class Footer extends Component{
    render(){
        return (
            <div className="footer" >
                <div className="logo" >
                <h3>Logo here</h3>
                </div>
                <div className="social-links">
                    <img src={fbIcon} alt="facebook" className="fb-icon"/>
                    <img src={liIcon} alt="linkedIn" />
                    <img src={ghIcon} alt="github" />
                </div>
                <div>
                    <h3 className="contact">Contact the Creators</h3>
                </div>
            </div>
        )
    }
}
export default Footer