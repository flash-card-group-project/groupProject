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
    // componentDidMount(){
    //     console.log("it gets HERE")
    //     this.props.getDecksHome();
        
    // }
    // componentWillUpdate(){

    // }
    // //handleClick
    // componentWillMount(){
    //     this.props.getDecksHome();
    // }
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
                <Link to='/viewer'>
                    <div className="card-question">
                        {this.props.question}
                    </div>
                </Link>

                <div className="card-buttons">
                    <div className="card-cover-buttons">
                        <button>
                            <img src={editIcon} alt='Edit' />
                        </button>
                    </div>

                    <div className="card-cover-buttons">
                        <button onClick={this.handleClickDelete}>
                            <img src={trashCan} alt='Delete' />
                        </button>
                    </div>
                </div>

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