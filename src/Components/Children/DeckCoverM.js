/* global location */
/* eslint no-restricted-globals: ["off", "confirm"] */

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { getCurrentDeck, getUser, getDecksHome, getFavorites, deleteDeck, editDeck } from '../../ducks/reducer';
import EditDeck from './EditDeck';
import '../Styles/_DeckCoverM.scss';
import privateIcon from '../Assets/private-mode.png';
import publicIcon from '../Assets/public-view-icon.png';
import favoriteIcon from '../Assets/favorite-icon.png';
import emptyHeartIcon from '../Assets/empty-heart-icon.png';
import trashCan from '../Assets/delete-icon.png';
import editIcon from '../Assets/edit-icon.png';
=======
import { getCurrentDeck, getUser, getDecksHome, getFavorites, deleteDeck } from '../../ducks/reducer';
import EditDeck from './EditDeck';
import privateCon from '../Assets/private.png';
import publicCon from '../Assets/public.svg.png';
import unfavorite from '../Assets/empty-heart.png';
import deleteCon from '../Assets/deleteIcon.png';
import editCon from '../Assets/editing.png';
import favoriteCon from '../Assets/filledHeart.png';
>>>>>>> cf24ebae22629ce41af93d20a7d9c061ce98070f

class DeckCoverM extends Component {

    constructor(props) {
        super(props)

        this.state = {
            publicStatus: this.props.public,
            favoriteStatus: null,
            favoriteArr: this.props.favorites,
            editDeck: false
        };
        this.privatePublicToggle = this.privatePublicToggle.bind(this);
        this.favoriteToggle = this.favoriteToggle.bind(this);
        this.deleteDeck = this.deleteDeck.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.editDeck = this.editDeck.bind(this);
    };


    componentDidMount() {
        let currentDeckID = this.props.deckid;
        let isFavorited = this.props.favorites.find(e => e.deck_id === currentDeckID);
        if (isFavorited) {
            this.setState({
                favoriteStatus: true
            })
        } else {
            this.setState({
                favoriteStatus: false
            })
        };

    };

    privatePublicToggle() {
        axios.put(`/api/decks/private-toggle/${this.props.deckid}`).then((res) => {
            if (this.state.publicStatus === true) {
                this.setState({
                    publicStatus: false
                })
            } else {
                this.setState({
                    publicStatus: true
                })
            }
        })
    };

    favoriteToggle() {
        if (this.state.favoriteStatus) {
            axios.delete(`/api/delete/favorites/${this.props.deckid}`).then(() => {
                this.props.getFavorites();
                this.setState({
                    favoriteStatus: false
                })
            })

        } else {
            axios.post(`/api/add/favorites/${this.props.deckid}`).then(() => {
                this.props.getFavorites();
                this.setState({
                    favoriteStatus: true
                })
            })
        }
    };

    editDeck() {
        this.setState({
            editDeck: true
        })
    };

    deleteDeck() {

        let confirmation = confirm("Are you sure you want to delete this deck?");
        if (confirmation) {
            this.props.deleteDeck(this.props.deckid)
        } else {
            alert('The deck was NOT deleted!')
        }
    };

    handleClick() {
        this.props.getCurrentDeck(this.props.deckid);

    }

    render() {
        let privacy = this.state.publicStatus;
        let favorite = this.state.favoriteStatus;
        let myButtons = this.props.userData.userId === this.props.creatorID;

        return (
            <div className="deck-cover">
<<<<<<< HEAD
                <Link onClick={this.handleClick} to={`/viewer/${this.props.deckid}`}>
                    <div className="deck-content">
                        <div className="deck-name">{this.props.name}</div>
                        <div className="deck-category">{this.props.category}</div>
                    </div>
                </Link>

                {myButtons ? (
                    <div className="box-buttons">
                        <div>
                            <button className="cover-button" onClick={this.privatePublicToggle}>{privacy ? <img src={publicIcon} alt='public' /> : <img src={privateIcon} alt='private' />}</button>
                            <button className="cover-button" onClick={this.favoriteToggle}>{favorite ? <img src={favoriteIcon} alt="Fav'd" /> : <img src={emptyHeartIcon} alt="Not Fav'd" />}</button>
                        </div>
                        <div>
                            <EditDeck
                                deckid={this.props.deckid} />
                            <button className="cover-button" onClick={this.deleteDeck}><img src={trashCan} alt='Delete' /></button>
                        </div>
=======
                <Link onClick={this.handleClick} to={`/viewer/${this.props.deckid}`} className="deck-content">
                    <div>
                        <h2>Deck Name </h2>
                        <p>{this.props.name}</p>
                        <h2>Category </h2>
                        <p>{this.props.category}</p>
                    </div>
                </Link>
                {myButtons ? (
                    <div className="box-buttons">
                            <button  
                            onClick={this.privatePublicToggle}>
                            {privacy ? <img src={publicCon} alt='public' /> 
                            : 
                            <img src={privateCon} alt='private' />}
                            </button>
                            <button 
                            onClick={this.favoriteToggle}>
                            {favorite ? <img src={favoriteCon} alt="Fav'd" /> 
                            : 
                            <img src={unfavorite} alt="Not Fav'd" />}
                            </button>
                            <EditDeck
                                deckid={this.props.deckid} />
                            <button onClick={this.deleteDeck}>
                            <img src={deleteCon} alt='Delete' />
                            </button>
>>>>>>> cf24ebae22629ce41af93d20a7d9c061ce98070f
                    </div>
                ) : (
                        <div>

                            <button onClick={this.favoriteToggle}>
                            {favorite ? <img src={favoriteCon} alt="Fav'd" /> 
                            : 
                            <img src={unfavorite} alt="Not Fav'd" />}
                            </button>
                        </div>
                    )}
            </div>

        )
    }
};

function mapStateToProps(state) {
    console.log(state, 'this is the state')
    return {
        userData: state.userData,
        userDecks: state.userDecks,
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, { getCurrentDeck, getUser, getDecksHome, getFavorites, deleteDeck, editDeck })(DeckCoverM);

// Kevin