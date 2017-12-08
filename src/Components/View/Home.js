import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDecksHome, getCurrentUser, getFavorites } from '../../ducks/reducer';
import CreateDeck from '../Children/CreateDeck';

class Home extends Component {
    componentWillMount() {
        this.props.getDecksHome();
        this.props.getCurrentUser();
        this.props.getFavorites();
    }
    render() {
        console.log(this.props);
        return (
            <main className='home_body'>
                <CreateDeck />
                <Link to='/my-decks/:id' className='card'>My Decks</Link>
                <Link to='/favorites' className='card'>Favorites</Link>
            </main>
        )
    }
}

function mapStateToProps(state) {
    console.log("Hi", state);
    return {
        userDecks: state.userDecks,
        currentUser: state.currentUser,
        favDecks: state.favDecks
    }
}

export default connect(mapStateToProps, { getDecksHome, getCurrentUser, getFavorites })(Home);