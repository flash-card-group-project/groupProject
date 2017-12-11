import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDecksHome, getFavorites, getUser, createDeck } from '../../ducks/reducer';
import CreateDeck from '../Children/CreateDeck';

class Home extends Component {

    componentDidMount() {
        this.props.getDecksHome();
        this.props.getFavorites();
        this.props.getUser();
    }
    render() {
        // console.log(this.props);
        return (
            <main className='home_body'>
                <h2 className='title_sml'>Welcome, {this.props.userData.first_name}!</h2>
                <button className='home_btn'>Create Deck</button>
                <Link to={`/my-decks/${this.props.userData.userId}`}><button className='home_btn'> My Decks</button></Link>
                <Link to={`/favorites/${this.props.userData.userId}`}><button className='home_btn'>Favorites</button></Link>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        favDecks: state.favDecks,
        userData: state.userData
    }
}

export default connect(mapStateToProps, { getDecksHome, getFavorites, getUser })(Home);