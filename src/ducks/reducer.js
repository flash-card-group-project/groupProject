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
    favDecks: [{
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
    }], //on Home page land
    userDecks: [{
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
    }] //on Home page land
};

const GET_USER = 'GET_USER';
const GET_FAVORITES = 'GET_FAVORITES';

export function getUser(){
    return {
        type: GET_USER,
        payload: axios.get('/auth/me').then(res => res)
    }
}

export function getDecksHome(){
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

//createDeck
export function createDeck(){
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

//editDeck
export function editDeck(){
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

//editCard
export function editCard(){
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

//searchDecks
export function searchDecks(){
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

//createCard
export function getChildren(){
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

//deleteDeck
export function deleteDeck(){
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

//deleteCard
export function deleteCard(){
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

export default function reducer(state=initialState, action){
    switch(action.type) {
        case 'GET_USER_PENDING':
            return state;
        case 'GET_USER_FULFILLED':
            return Object.assign(
                {},
                state,
                {
                    currentUser: {
                        userId: action.payload.data[0].id,
                        first_name: action.payload.data[0].first_name
                    }
                }
            )
        case 'GET_USER_REJECTED':
            return state;
    }
    return state;
}