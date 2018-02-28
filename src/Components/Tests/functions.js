const data = require('./data.js');
//Natalia's
module.exports = {
    
    searchForDecks: (input) => {
        let found = data.filter(item => {
            let name = item.deck_name.toLowerCase();
            let newInput = input.toLowerCase()
            return name.includes(newInput)
        })
        return found[0].deck_name;
    },

    searchForPublic: () => {
        let publicDecks = data.map(item => {
            return item.public === true;
        })
        return publicDecks[0];
    },

    searchForObject: () => {
        let publicDecks = data.map(item => {
            return item.public === true;
        })
        return typeof (publicDecks);
    },


    //ana tests
    getAllParentIds: () => {
        let result = data.map(e => e.cards.map(e => e.parent_id));
        return result;
    },
    getAllCards: () => {
        let cards = data.map(e => {
            return e.cards.question;
        })
        return typeof (cards);
    },
    cardIdIsInteger: () => {
        let cardId = data.map(e => {
            return e.cards.card_id;
        })
        return typeof (cardId)
    },
    cardsFormat: () => {
        let cardsArray = data.map((deck) => {
            deck.cards
        })
        return cardsArray;
    },


    //erin tests
    decks: [],
    userDeck: [{
        deck_name: '',
        deck_category: '',
        creatorId: null
    }],

    createDeck: function(decks) {
        let newDeck = this.decks.push((deck) => {
            this.decks.deck;
        })
        this.decks.length += 1;
        return newDeck;
    },
    giveDeckName: function(input){
        let userInput = input.toLowerCase();
        this.userDeck.deck_name = userInput;
    },
    giveDeckCreator: function(deck){
        let creatorId = 3;
        let newUserDeck = Object.defineProperty(this.userDeck, 'creatorId', {
            value: creatorId
        });
        return newUserDeck;
    },
    createDeckCategory: function(input){
        let catInput = input.toLowerCase();
        this.userDeck.deck_category = catInput;
    }
}
