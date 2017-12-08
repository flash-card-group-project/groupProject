import React, { Component } from 'react';
import axios from 'axios';


class CardCoverM extends Component {

    constructor(props) {
        super(props)

        this.state = {
            card_question: this.props.match.params.question,
            deleteStatus: ''
        };
    };

    handleClick() {
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
                <p style={{color: 'red'}}>{this.state.deleteStatus}</p>
                <div>
                    {this.state.card_question}
                </div>
                <a href='http://localhost:3000/create-card'>
                <button>
                    <img src='' alt='Edit' />
                </button>
                </a>
                
                <button onClick={}>
                    <img src='' alt='Delete' />
                </button>
                
            </div>
        )
    }
};

export default CardCoverM;


// Kevin