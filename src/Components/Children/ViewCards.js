import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardCoverM from './CardCoverM';
import { Link } from 'react-router-dom';

class ViewCards extends Component {
    render() {
        console.log('CURRENT_CARD', this.props.currentDeck);
        const cardList = this.props.currentDeck.cards
            ? this.props.currentDeck.cards.map((card, i) => {
                console.log(card)
                return (
                    <CardCoverM
                        key={i}
                        question={card.question}
                        cardID={card.card_id}
                    />
                )
            })
            : 'Please create cards for your deck!';
        return (
            <div>
                <Link to={`/study`}>
                    <button>STUDY!</button>
                </Link>
                <Link to={`/create-card/${this.props.currentDeck.deck_id}`}>
                    <button>Create Card</button>
                </Link>

                <div>
                    {cardList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentDeck: state.currentDeck,
        userDecks: state.userDecks
    };
}

export default connect(mapStateToProps, {})(ViewCards);
