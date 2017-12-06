const initialState = {
    currentUser: {
        userId: 0,
        first_name: ''
    }, //on Home page land
    currentDeck: {
        deckId: 0,
        subDecks: [{
            deckId: 0,
            deckName: '',
            category: ''
        }],
        cards: [{
            cardId: 0,
            question: '',
            answer: ''
        }]
    }, //onclick deckCover, submit createDeck
    favDecks: [], //on Home page land
    userDecks: [] //on Home page land
};

export default function reducer(state=initialState, action){
    return state;
}