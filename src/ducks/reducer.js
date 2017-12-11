import axios from 'axios';

const initialState = {
    currentUser: {

    }, //on Home page land
    currentDeck: {
        deck_name: '',
        category: '',
        deck_card: '',
        public: null
        // cards: []
    }, //onclick deckCover, submit createDeck
    favDecks: [

    ], //on Home page land
    userDecks: [
        
    ],
    history: [],
    //on Home page land
    card:{
            question:'',
            answer:'',
            multiple1:'',
            multiple2:'',
            multiple3:'',
            multiple4:''    
    }
};

const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_DECKS = 'GET_DECKS';
const GET_USER = 'GET_USER';
const GET_FAVORITES = 'GET_FAVORITES';
const CREATE_DECK = 'CREATE_DECK';
// const UPDATE_CURRENT_DECK = 'UPDATE_CURRENT_DECK';
const CREATE_CARD= 'CREATE_CARD';

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/auth/me').then(res => res)
    }
}

export function getCurrentUser() {
    return {
        type: GET_CURRENT_USER,
        payload: axios.get('/api/currentUser').then(res => res)
    }
}

export function getDecksHome() {
    return {
        type: GET_DECKS,
        payload: axios.get('/api/user/decks').then(res => res)
    }
}

export function getFavorites() {
    return {
        type: GET_FAVORITES,
        payload: axios.get('/api/user/favorites').then(res => res)
    }
}

//createDeck erin 12/8
export function createDeck(body) {
    console.log('create deck redux');
    return {
        type: CREATE_DECK,
        payload: axios.post('/api/create/deck', body).then(res => res)
    }
}
// // updateReduxDeck erin 12/8
// export function updateReduxDeck(val){
//     return {
//         type: UPDATE_CURRENT_DECK,
//         payload: val
//     }
// }
//editDeck
export function editDeck() {
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

//editCard
export function editCard() {
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

//searchDecks
export function searchDecks() {
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

//createCard
export function createCard(body) {
    return {
        type: CREATE_CARD,
        payload: axios.post('/api/create/card',body).then(res => res)
    }
}

//deleteDeck
export function deleteDeck() {
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

//deleteCard
export function deleteCard() {
    return {
        type: GET_DECKS,
        payload: axios.get('').then(res => res)
    }
}

export default function reducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
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
        case 'GET_CURRENT_USER_FULFILLED':
        
            return Object.assign(
                {},
                state,
                {
                    currentUser: action.payload.data
                }
            )
        case 'GET_DECKS_FULFILLED':
            if (action.payload.data === 'No decks found.') {
                return state;
            } else {
                return Object.assign(
                    {},
                    state,
                    {
                        userDecks: action.payload.data
                    }
                )
            }
        case 'GET_FAVORITES_FULFILLED':
            console.log("Bye", action.payload)
            return Object.assign(
                {},
                state,
                {
                    favDecks: action.payload.data
                }
            )
        case 'CREATE_DECK_FULFILLED':
            return Object.assign(
                {},
                state,
                {
                    currentDeck: action.payload.data
                }
            )
  
            case 'CREATE_CARD':
            console.log('will create card', action.payload)
            return Object.assign({}, state)
            default: return state;
    }
}