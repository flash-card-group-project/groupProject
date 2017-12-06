import React, { Component } from 'react';
import axios from 'axios';


class CardCoverM extends Component {

    constructor(props) {
        super(props)

        this.state = {
            card_title : 'Some Deck',
            card_category : 'Some Category',
            deck_number : this.props.match.params.number,
            card_info : []
        };
    };

    componentDidMount() {
        axios.get(`/api/cards/${this.state.deck_number}`).then(response => {

            this.setState({
                card_info: response.data
            });
        })
    };

    componentWillReceiveProps(nextProps) {
        axios.get(`/api/cards/${nextProps.match.params.decks}`).then(response => {

            this.setState({
                card_info: response.data
            });
        })
    };

    editCard(){

    };

    deleteCard(){

    };

    render() {
        let cardCoverList = this.state.card_info.map((item, index) => {
            return (
                <div key={index} className="card-cover">
                    <div className="question-face">
                        <h3> {item.question} </h3>
                    </div>
                    <div className="c-buttons">
                        <div>
                            <button onClick={this.privatePublicToggle.bind(this)}></button>
                            <button onClick={this.favoriteToggle.bind(this)}></button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            {cardCoverList}
        )
    }
};

export default CardCoverM;


// Kevin