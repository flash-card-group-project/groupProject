import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from "./../../ducks/reducer";

class Header extends Component{
render() {
    return (
        <section>
            <nav className='nav_links'>
                <div><Link to='/home'>H</Link></div>
                <div><Link to='/search'>SEARCH</Link></div>                
                <div><Link to={`/my-decks/${this.props.userData.userId}`}>MD</Link></div>
                <div><Link to='/favorites'>FAV</Link></div>
                <a href={process.env.REACT_APP_LOGOUT}><div>OUT</div></a>
            </nav>
        </section>
    )}
}
function mapStateToProps(state) {
    
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps, { getUser })(Header);
