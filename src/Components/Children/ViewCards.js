import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardCoverM from './CardCoverM';
import { Link } from 'react-router-dom';

class ViewCards extends Component {
    render() {
        const cardList = this.props.currentDeck.cards
            ? this.props.currentDeck.cards.map((card, i) => {
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
                <div className='card_viewer_options'>
                <Link to={`/study`} className='option_section'>
                    STUDY!
                </Link>
                <Link to={`/create-card/${this.props.currentDeck.deck_id}`}
                className='option_section'>
                    Create Card
                </Link>
                </div>
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
