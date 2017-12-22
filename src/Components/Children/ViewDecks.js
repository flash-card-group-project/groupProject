import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentDeck } from './../../ducks/reducer';
import DeckCoverM from './DeckCoverM';
import CreateDeck from './CreateDeck';


class ViewDecks extends Component {
  
    render() {
        const subDeckList = this.props.subDecks.length
            ? this.props.subDecks.map((deck, i) => {
                return (
                    <div key={i}>
                        <DeckCoverM
                            name={deck.deck_name}
                            category={deck.category}
                            deckid={deck.deck_id}
                            public={deck.public}
                            userID={this.props.id}
                            creatorID={deck.creator_id} 
                        />
                    </div>
                )
            })
            : 'Create a sub-deck for your deck.';
        return (
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
        userData: state.userData,
        subDecks: subDecks,
        currentDeck: state.currentDeck,
        userDecks: state.userDecks
    }
}

export default connect(mapStateToProps, { getCurrentDeck })(ViewDecks);
