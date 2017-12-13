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
        return (
            <main className='home_body'>
                <h2 className='title_sml welcome_background'>Welcome, {this.props.userData.first_name}!</h2>
                <CreateDeck />
                <Link to={'/my-decks'}><button className='large_btn'> My Decks</button></Link>
                <Link to={'/favorites'}><button className='large_btn'>Favorites</button></Link>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        favDecks: state.favDecks,
        userData: state.userData,
        currentDeck: {}
    }
}

export default connect(mapStateToProps, { getDecksHome, getFavorites, getUser })(Home);