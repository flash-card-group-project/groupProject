import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDecksHome, getCurrentUser, getFavorites } from '../../ducks/reducer';

class CardCoverM extends Component {

    constructor(props) {
        super(props)

        this.state = {
            card_question: this.props.match.params.question,
            deleteStatus: ''
        };
        this.handleClickDelete = this.handleClickDelete.bind(this);
    };

    //handleClick will give an error about confirm -Kevin 12/8

    handleClickDelete() {
        let deleteCard = confirm('Are you sure you want to delete this question?');
        if (deleteCard === true) {
            axios.delete('/api/delete/card').then(response => {

            })
        } else {
            this.setState({
                deleteStatus: 'Question was not deleted!'
            })
        }
    }

    render() {
        return (
            <div>
                <p style={{ color: 'red' }}>{this.state.deleteStatus}</p>
                <div>
                    {this.state.card_question}
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

export default CardCoverM;


// Kevin