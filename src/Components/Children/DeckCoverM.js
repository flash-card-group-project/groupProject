import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDecksHome, getFavorites } from '../../ducks/reducer';
import privateIcon from '../Assets/private-mode.png';
import publicIcon from '../Assets/public-view-icon.png';
import favoriteIcon from '../Assets/favorite-icon.png';
import emptyHeartIcon from '../Assets/empty-heart-icon.png';

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
    };


    componentDidMount() {
        this.props.getFavorites()
        .then(()=> {
        let currentDeckID = this.props.deckid;
        for (let i = 0; i < this.props.favorites.length; i++) {
            if (this.props.favorites[i] === currentDeckID) {
                this.setState({
                    favoriteStatus: true
                })
            }
        }
        // if (this.props.favorites.includes(currentDeckID)) {
        //     this.setState({
        //         favoriteStatus: true
        //     })
        // } else {
        //     this.setState({
        //         favoriteStatus: false
        //     })
        // }
    })};

    // componentWillReceiveProps(nextProps) {
    //     axios.get(`/api/decks/${nextProps.match.params.decks}`).then(response => {

    //         this.setState({
    //             deck_info: response.data
    //         });
    //     })
    // };

    privatePublicToggle() {
        console.log(this.props)
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
        console.log(this.state)
        if (this.state.favoriteArr.includes(this.props.deckid)) {
            axios.delete(`/api/delete/favorites/${this.props.deckid}`).then((res) => {
                this.props.getFavorites();
                this.setState({
                    favoriteStatus: false
                })
            })

        } else {
            axios.post(`/api/add/favorites/${this.props.deckid}`).then((res) => {
                this.props.getFavorites();
                this.setState({
                    favoriteStatus: true
                })
            })
        }
    };

    // editDeck(){

    // };

    // deleteDeck(){

    // };

    render() {

        let privacy = this.state.publicStatus;
        let favorite = this.state.favoriteStatus;

        return (

            <div className="deck-cover">
                <div className="name-category">
                    <h3> {this.props.name}</h3>
                    <h3> {this.props.category}</h3>
                </div>
                <div className="d-buttons">
                    <div>
                        <button onClick={this.privatePublicToggle}>{privacy ? <img src={publicIcon} alt='' /> : <img src={privateIcon} alt='' />}</button>
                        <button onClick={this.favoriteToggle}>{favorite ? <img src={favoriteIcon} alt='' /> : <img src={emptyHeartIcon} alt='' />}</button>
                    </div>
                    <div>
                        <button onClick={this.editCard}>Edit</button>
                        <button onClick={this.deleteCard}>Delete</button>
                    </div>
                </div>


            </div>
        )
    }
};

function mapStateToProps(state) {
    // console.log(state)
    return {
        userDecks: state.userDecks,
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, { getDecksHome, getFavorites })(DeckCoverM);

// Kevin