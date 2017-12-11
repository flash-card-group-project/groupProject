import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckCoverM from './DeckCoverM';
import CreateDeck from './CreateDeck';

class ViewDecks extends Component {
    render(){
        const subDeckList = this.props.subDecks.length
        ? this.props.subDecks.map((deck, i) => {
            return (
                <DeckCoverM 
                   key = {i}
                   deckName = {deck.deck_name}
                   category = {deck.category}
                    />
            )
        })
        : 'null';
        return(
            <div>
                <CreateDeck />
                <div>
                    {subDeckList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let subDecks = state.userDecks.filter((deck, i) => {
        return deck.parent_id === state.currentDeck.deck_id;
    });
    return {
        subDecks: subDecks
    }
}

export default connect(mapStateToProps, {})(ViewDecks);
