import axios from 'axios';
import { log } from 'util';

const initialState = {
    userData: {},
    currentUser: {}, //on Home page land need to delete not being used
    currentDeck: {
        deck_id: null,
        deck_name: '',
        category: '',
        deck_card: '',
        public: null,
        cards: [{
            card_id: null,
            question: '',
            parent_id: null
        }]
    }, //onclick deckCover, submit createDeck
    favorites: [], //on Home page land
    userDecks: [], // parent decks ONLY
    history: [],
    //on Home page land
    card: {}
};

const GET_DECKS = 'GET_DECKS';
const GET_USER = 'GET_USER';
const GET_FAVORITES = 'GET_FAVORITES';
const CREATE_DECK = 'CREATE_DECK';
// const UPDATE_CURRENT_DECK = 'UPDATE_CURRENT_DECK';
const CREATE_CARD = 'CREATE_CARD';
const ADD_FAVORITE_DECK = 'ADD_FAVORITE_DECK';
const EDIT_DECK = 'EDIT_DECK';
const GET_CURRENT_DECK = 'GET_CURRENT_DECK';
const GET_USER_CREATED_DECKS = 'GET_USER_CREATED_DECKS';
const DELETE_DECK = 'DELETE_DECK';
const DELETE_CARD = 'DELETE_CARD';




export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/auth/me').then(res => res)

    }
}

export function getDecksHome() {
    return {
        type: GET_DECKS,
        payload: axios.get(`/api/user/decks`).then(res => res)
    }
}

export function getFavorites() {
    // console.log("ID:", userID)
    return {
        type: GET_FAVORITES,
        payload: axios.get(`/api/user/favorites`).then(res => res)
    }
}

export function addToFavorites(deckID) {
    return {
        type: ADD_FAVORITE_DECK,
        payload: axios.post(`/api/add/favorites/${deckID}`).then(res => res)
    }
}

export function getCurrentDeck(deckID) {
    return {
        type: GET_CURRENT_DECK,
        payload: axios.get(`/api/deck/currentDeck/${deckID}`).then(res => res)
    }
}

//createDeck erin 12/8
export function createDeck(body) {
    console.log('create deck redux body', body);
    return {
        type: CREATE_DECK,
        payload: axios.post(`/api/create/deck`, body).then(res => res)
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
export function editDeck(deckId, body) {
    console.log('editDeck in redux');
    return {
        type: EDIT_DECK,
        payload: axios.put(`/api/deck/edit/${deckId}`, body).then(res => res)
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
export function createCard(body, deck_id) {
    return {
        type: CREATE_CARD,
        payload: axios.post(`/api/create/card/${deck_id}`, body).then(res => res)
    }
}

//DELETE DECK:
export function deleteDeck(deck_id) {
    return {
        type: DELETE_DECK,
        payload: axios.delete(`/api/delete/deck/${deck_id}`).then(res => res)
    }
}

//deleteCard
export function deleteCard(card_id) {
    return {
        type: DELETE_CARD,
        payload: axios.delete(`/api/card/delete/${card_id}`).then(res => res)
    }
}

export default function reducer(state = initialState, action) {
    // console.log('action.type: ', action.type);
    switch (action.type) {
        case 'GET_USER_PENDING':
            return state;

        case 'GET_USER_FULFILLED':
            return Object.assign({}, state, {
                userData: {
                    userId: action.payload.data.id,
                    first_name: action.payload.data.first_name
                }
            })
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
            return Object.assign({}, state, {
                favorites: action.payload.data
            })

        case 'ADD_FAVORITE_DECK_FULFILLED':
            return Object.assign([], state, {
                userData: action.payload.data
            }
            )

        case 'CREATE_DECK_FULFILLED':
            console.log('reducer: ', action.payload.data)
            return Object.assign(
                {},
                state,
                {
                    currentDeck: action.payload.data[0]
                }
            )

        case 'CREATE_CARD':
            console.log('will create card', action.payload)
            return Object.assign({}, state)

        case 'EDIT_DECK_FULFILLED':
            console.log('edit card testing', action.payload)
            return Object.assign({}, state, {
                currentDeck: action.payload.data
            }
            )
        case 'GET_CURRENT_DECK_FULFILLED':
            console.log(action)
            return Object.assign({}, state, { currentDeck: action.payload.data[0] })

        case 'DELETE_CARD_FULFILLED':
            console.log(action.payload)
            let copyCurrentDeck = Object.assign({}, state.currentDeck)
            copyCurrentDeck.cards = copyCurrentDeck.cards.filter(item => {
                return item.card_id !== action.payload.data
            })

            return Object.assign({}, state, { currentDeck: copyCurrentDeck })

        case 'DELETE_DECK_FULFILLED':
        console.log("REducer gets here", action.payload)
        
            let copyCurrentDeck2 = Object.assign({}, state.currentDeck)
            copyCurrentDeck2.deck_id = copyCurrentDeck2.deck_id.filter(item => {
                return item.deck_id !== action.payload.data
            })
            console.log(action.payload.data)
            return Object.assign({}, state, { currentDeck: copyCurrentDeck2 })

        default: return state;
    }
}