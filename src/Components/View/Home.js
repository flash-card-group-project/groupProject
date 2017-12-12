import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDecksHome, getCurrentUser, getFavorites, getUser } from '../../ducks/reducer';
import CreateDeck from '../Children/CreateDeck';

class Home extends Component {

    componentDidMount() {
        this.props.getDecksHome();
        this.props.getCurrentUser();
        this.props.getFavorites();
        this.props.getUser(); //auth user info
    }
    render() {
        // console.log(this.props);
        return (
            <main className='home_body'>
                <h2 className='title_sml'>Welcome, {this.props.userData.first_name}!</h2>
                <h2>Where would you like to go? </h2>
                <CreateDeck />
                <Link to={`/my-decks/${this.props.userData.userId}`} className='card'>My Decks</Link>
                <Link to={`/favorites/${this.props.userData.userId}`} className='card'>Favorites</Link>
            </main>
        )
    }
}

function mapStateToProps(state) {
    // console.log("Home", state);
    return {
        // userDecks: state.userDecks,
        currentUser: state.currentUser,
        favDecks: state.favDecks,
        userData: state.userData
    }
}

export default connect(mapStateToProps, { getDecksHome, getCurrentUser, getFavorites, getUser })(Home);