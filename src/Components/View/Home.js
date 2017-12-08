import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import CreateDeck from '../Children/CreateDeck';

class Home extends Component {
    componentDidMount() {
        console.log(this.props.location.pathname)
    }
    
    render() {
        return (
            <main className='home_body'>
                <div className='card'>Create Deck</div>
                <Link to='/my-decks/:id' className='card'>My Decks</Link>
                <Link to='/favorites' className='card'>Favorites</Link>
            </main>
        )
    }
}

export default Home;