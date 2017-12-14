import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from './../../ducks/reducer';

class Favorites extends Component {


    componentDidMount() {
        this.props.getFavorites(this.props.userData.userId);

    }

    render() {
        let favorite = this.props.favorites.map((item, i) => {
            return (
                <div className='deck_results' key={i} >
                    <div className='deck_found' >
                        <div className='deck_name'>{item.deck_name}</div>
                        <div className='deck_category'>{item.category}</div>
                    </div>
                    <div className='boxes'>
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                    </div>
                </div>
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