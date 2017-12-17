import React, { Component } from 'react';
import axios from 'axios';
import DeckCoverM from '../Children/DeckCoverM';


export default class Search extends Component {
    constructor() {
        super()

        this.state = {
            allPublicDecks: [],
            userInput: '',
            foundDecks: []
        }
    }

    handleChange(value) {
        this.setState({
            userInput: value
        })
    }
    handleClick() {
        let found = this.state.allPublicDecks.filter((item, i) => {
            let name = item.deck_name.toLowerCase();
            let input = this.state.userInput.toLowerCase();
            return name.includes(input)
        });
        this.setState({
            foundDecks: found
        })
    }

    //get decks by category
    componentDidMount() {
        axios.get('/api/all/decks')
            .then(res => {
                this.setState({
                    allPublicDecks: res.data
                })
            })
    }


    render() {
        let filteredDecks = this.state.foundDecks.map((item, i) => {
            return (

                <div className='deck_results' key={i}>
                    <DeckCoverM
                        name={item.deck_name}
                        category={item.category}
                        deckid={item.deck_id}
                        public={item.public}
                        userID={this.props.id}
                        creatorID={item.creator_id} />
                </div>

            )
        });
        return (
            <div>
                <div className='search_input'>
                    <input type='text' placeholder='Search for decks' value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)} />
                    <button type='submit' onClick={() => this.handleClick(this.state.userInput)}>Find Decks</button>
                </div>
                <div className='search_container'>
                    {filteredDecks.length >= 0 ?
                        (<div className='search_results' >Search Results: {filteredDecks.length}
                            <div className='results'>{filteredDecks}</div>
                        </div>) : null
                    }
                </div>


            </div>
        )
    }
}

