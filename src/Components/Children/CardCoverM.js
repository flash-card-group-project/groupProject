/* global location */
/* eslint no-restricted-globals: ["off", "confirm"] */

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDecksHome, deleteCard } from '../../ducks/reducer';
import editIcon from '../Assets/edit-icon.png';
import trashCan from '../Assets/delete-icon.png';

class CardCoverM extends Component {

    constructor(props) {
        super(props)

        this.state = {
            deleteStatus: ''
        };
        this.handleClickDelete = this.handleClickDelete.bind(this);
    };

    // componentWillUpdate(){

    // }
    // //handleClick
    // componentWillMount(){
    //     this.props.getDecksHome();
    // }
    handleClickDelete() {
        let deleteCard = confirm('Are you sure you want to delete this question?');
        if (deleteCard === true) {
            this.props.deleteCard(this.props.cardID);
            alert('The card was successfully deleted!');
        } else {
            alert('The card was NOT deleted!');
        }
    };

    render() {
        return (
            <div>
                <p style={{ color: 'red' }}>{this.state.deleteStatus}</p>
                <div>
                    {this.props.question}
                </div>
                <Link to='/viewer'>
                    <button>
                        <img src={editIcon} alt='Edit' />
                    </button>
                </Link>

                <button onClick={this.handleClickDelete}>
                    <img src={trashCan} alt='Delete' />
                </button>

            </div>
        )
    }
};

function mapStateToProps(state) {
    console.log(state.currentDeck, 'this is from card cover, after delete')
    return {
        currentDeck: state.currentDeck
    }
}

export default connect(mapStateToProps, { getDecksHome, deleteCard })(CardCoverM);


// Kevin