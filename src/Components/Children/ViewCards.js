import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardCoverM from './CardCoverM';

class ViewCards extends Component {
    render(){
        console.log('CURRENT_DECK', this.props.currentDeck);
        const cardList = this.props.currentDeck.cards
                         ? this.props.currentDeck.cards.map((card, i) => {
                             return (
                                 <CardCoverM 
                                    key = {i}
                                    question = {card.question}
                                    />
                             )
                         })
                         : 'Please create cards for your deck!';
        return(
            <div>
                <button>STUDY!</button>
                <a href={`/create-card/${this.props.currentDeck.deck_id}`}><button>Create Card</button></a>
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
