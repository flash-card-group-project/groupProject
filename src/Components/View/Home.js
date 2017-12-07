import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getDecksHome } from '../../ducks/reducer';
// import CreateDeck from '../Children/CreateDeck';

class Home extends Component {
    // componentWillMount(){
    //     axios.get('api/user/decks/:id').then((res)=>{

    //     })
    // }
    render() {
        console.log(this.props);
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
    return {
        userDecks: state.userDecks
    }
}

export default connect(mapStateToProps, { getDecksHome })(Home);