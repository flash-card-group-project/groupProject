import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from './../../ducks/reducer';
import DeckCoverM from '../Children/DeckCoverM';

class Favorites extends Component {

    componentDidMount() {
        this.props.getFavorites(this.props.userData.userId);

    }

    render() {
        let favorite = this.props.favorites.map((item, i) => {
            return (
                <DeckCoverM 
                    key = {i}
                    name={item.deck_name}
                    category={item.category}
                    deckid={item.deck_id}
                />
            )
        })
        return (
            <div>
                <div className='favorites_banner'>
                    <h2 className='favorites_title'>Your Favorites</h2>
                </div>
                <div className='user_decks'>
                    {favorite}
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    // console.log("Favorites STATE", state)
    return {
        userData: state.userData,
        favorites: state.favorites
    }
}
export default connect(mapStateToProps, { getFavorites })(Favorites);