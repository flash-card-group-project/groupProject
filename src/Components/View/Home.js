import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getDecksHome, getCurrentUser } from '../../ducks/reducer';

// import CreateDeck from '../Children/CreateDeck';

class Home extends Component {
     componentWillMount(){
        this.props.getDecksHome();
        this.props.getCurrentUser();
    }
    render() {
        // console.log(this.props);
        return (
            <main className='home_body'>
                <div className='card'>Create Deck</div>
                <Link to='/my-decks/:id' className='card'>My Decks</Link>
                <Link to='/favorites' className='card'>Favorites</Link>
            </main>
        )
    }
}

function mapStateToProps(state) {
    console.log("Hi", state.currentUser);
    return {
        userDecks: state.userDecks,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { getDecksHome, getCurrentUser })(Home);