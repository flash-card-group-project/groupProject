import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentDeck } from './../../ducks/reducer';
import DeckCoverM from './DeckCoverM';
import CreateDeck from './CreateDeck';

class ViewDecks extends Component {
    constructor(props){
        super(props)

    }
        
    componentDidMount(){
   
}  

    render(){
        const subDeckList = this.props.subDecks.length
        ? this.props.subDecks.map((deck, i) => {
            return (
                <DeckCoverM 
                   key = {i}
                   name={deck.deck_name}
                   category={deck.category}
                   deckid={deck.deck_id}
                   public={deck.public}
                   userID={this.props.id}
                   creatorID={deck.creator_id}
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
        return deck.parent_id !== state.currentDeck.deck_id;
    });
    
    console.log(state.userDecks, 'deck parentid');
    console.log(state.currentDeck.deck_id, 'state currentdeck');
    console.log(subDecks, 'subDecks');
    console.log(state.userDecks.parent_id === state.currentDeck.deck_id);
    console.log(state.currentDeck);
    return {
        userData: state.userData,
        subDecks: subDecks,
        currentDeck: state.currentDeck, 
        userDecks: state.userDecks
    }
}

export default connect(mapStateToProps, { getCurrentDeck })(ViewDecks);
