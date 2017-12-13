import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDecksHome, getCurrentUser, getFavorites } from '../../ducks/reducer';
import Modal from 'react-modal';

class CardCoverM extends Component {

    constructor(props) {
        super(props)

        this.state = {
            card_question: '',
            deleteStatus: ''
        };
        // this.handleClickDelete = this.handleClickDelete.bind(this);
    };

    //handleClick will give an error about confirm -Kevin 12/8

    // handleClickDelete() {
    //     let deleteCard = confirm('Are you sure you want to delete this question?');
    //     if (deleteCard === true) {
    //         axios.delete('/api/delete/card').then(response => {

    //         })
    //     } else {
    //         this.setState({
    //             deleteStatus: 'Question was not deleted!'
    //         })
    //     }
    // }

    render() {
        let card = this.props.currentDeck.cards.map((item, i) => {
            return(
                <div key={i}>
                    <p>Card ID:{item.card_id}</p>
                    <p>QUESTION: {item.question}</p>
                    <p>PARENT DECK ID: {item.parent_id}</p>

                </div>
            )
        })
        return (
            <div>
                <p style={{ color: 'red' }}>{this.state.deleteStatus}</p>
                <div>
                    {card}
                    {/* {this.state.card_question} */}
                </div>
                <Link to='/viewer'>
                    <button>
                        <img src='' alt='Edit' />
                    </button>
                </Link>

                <button onClick={this.handleClickDelete}>
                    <img src='' alt='Delete' />
                </button>

            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        currentDeck: state.currentDeck
    }
}

export default connect(mapStateToProps, {})(CardCoverM);


// Kevin