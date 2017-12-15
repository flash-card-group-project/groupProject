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
                />
            )
        })

        return (
            <div className='search_container'>
                <div>Favorite some decks and they will appear here!</div>
                {favorite}
            </div>
        )
    }

}

function mapStateToProps(state) {
    console.log("Favorites", state)
    return {
        userData: state.userData,
        favorites: state.favorites
    }
}
export default connect(mapStateToProps, { getFavorites })(Favorites);