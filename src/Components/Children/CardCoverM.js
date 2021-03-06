/* global location */
/* eslint no-restricted-globals: ["off", "confirm"] */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDecksHome, deleteCard } from '../../ducks/reducer';
import trashCan from '../Assets/deleteIcon.png';

class CardCoverM extends Component {

    constructor(props) {
        super(props)
        this.handleClickDelete = this.handleClickDelete.bind(this);
    };

    handleClickDelete() {
        let deleteCard = confirm('Are you sure you want to delete this card?');
        if (deleteCard === true) {
            this.props.deleteCard(this.props.cardID);
        } else {
            alert('The card was NOT deleted!');
        }
    };

    render() {
        return (
            <div className="card-cover">
                    <div className="card-question">
                        {this.props.question}
                    </div>
                <button onClick={this.handleClickDelete}>
                    <img src={trashCan} alt='Delete' />
                </button>
            </div>
        )
    }
};

function mapStateToProps(state) {

//   console.log(state.currentDeck, 'card cover')
    return {
        currentDeck: state.currentDeck
    }
}

export default connect(mapStateToProps, { getDecksHome, deleteCard })(CardCoverM);


// Kevin