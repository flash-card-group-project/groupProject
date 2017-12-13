import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardCoverM from './CardCoverM';
import { Link } from 'react-router-dom';

class ViewCards extends Component {
    render() {
        console.log('CURRENT_DECK', this.props.currentDeck);
        const cardList = this.props.currentDeck.cards
            ? this.props.currentDeck.cards.map((card, i) => {
                return (
                    <CardCoverM
                        key={i}
                        question={card.question}
                    />
                )
            })
            : 'Please create cards for your deck!';
        return (
            <div>
                <button>STUDY!</button>
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
        currentDeck: state.currentDeck
    };
}

export default connect(mapStateToProps, {})(ViewCards);
