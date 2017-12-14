/* global location */
/* eslint no-restricted-globals: ["off", "confirm"] */

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentDeck, getUser, getDecksHome, getFavorites, deleteDeck } from '../../ducks/reducer';
import '../Styles/_DeckCoverM.scss';
import privateIcon from '../Assets/private-mode.png';
import publicIcon from '../Assets/public-view-icon.png';
import favoriteIcon from '../Assets/favorite-icon.png';
import emptyHeartIcon from '../Assets/empty-heart-icon.png';
import trashCan from '../Assets/delete-icon.png';
import editIcon from '../Assets/edit-icon.png';

class DeckCoverM extends Component {

    constructor(props) {
        super(props)

        this.state = {
            publicStatus: this.props.public,
            favoriteStatus: null,
            favoriteArr: this.props.favorites
        };
        this.privatePublicToggle = this.privatePublicToggle.bind(this);
        this.favoriteToggle = this.favoriteToggle.bind(this);
        this.deleteDeck = this.deleteDeck.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };


    componentDidMount() {
        let currentDeckID = this.props.deckid;
        let isFavorited = this.props.favorites.find(e => e.deck_id === currentDeckID);
        // console.log(this.props.favorites.includes(currentDeckID));
        if (isFavorited) {
            this.setState({
                favoriteStatus: true
            })
        } else {
            this.setState({
                favoriteStatus: false
            })
            // console.log(this.props.favorites)
        };
        // if (this.props.favorites.includes(currentDeckID)) {
        //     this.setState({
        //         favoriteStatus: true
        //     })
        // } else {
        //     this.setState({
        //         favoriteStatus: false
        //     })
        // }

    };

    // componentWillReceiveProps(nextProps) {
    //     axios.get(`/api/decks/${nextProps.match.params.decks}`).then(response => {

    //         this.setState({
    //             deck_info: response.data
    //         });
    //     })
    // };

    privatePublicToggle() {
        // console.log(this.props)
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
        // console.log(this.state)
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

    // editDeck(){

    // };

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
        // console.log("PROPS", this.props)
        
        let privacy = this.state.publicStatus;
        let favorite = this.state.favoriteStatus;
        let myButtons = this.props.userData.userId === this.props.creatorID;
        // console.log(this.props.userData.userId);
        // console.log(this.props.creatorID);
        // console.log(myButtons);

        return (
            <div className="deck-cover">
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
                            <button className="cover-button" onClick={this.editCard}><img src={editIcon} alt='Edit' /></button>
                            <button className="cover-button" onClick={this.deleteDeck}><img src={trashCan} alt='Delete' /></button>
                        </div>
                    </div>
                ) : (
                        <div>

                            <button onClick={this.favoriteToggle}>{favorite ? <img src={favoriteIcon} alt="Fav'd" /> : <img src={emptyHeartIcon} alt="Not Fav'd" />}</button>
                        </div>
                    )}



            </div>

        )
    }
};

function mapStateToProps(state) {
    // console.log(state, 'this is the state')
    return {
        userData: state.userData,
        userDecks: state.userDecks,
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, { getCurrentDeck, getUser, getDecksHome, getFavorites, deleteDeck })(DeckCoverM);

// Kevin