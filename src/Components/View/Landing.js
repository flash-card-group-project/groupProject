import React, {Component} from 'react';

class Landing extends Component{
    render(){
        return (
            <div>
            <div>I am the landing page</div>
            <a href={process.env.REACT_APP_LOGIN}><button>login</button></a>
            </div>
        )
    }
}

export default Landing;