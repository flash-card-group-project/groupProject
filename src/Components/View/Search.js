import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    constructor() {
        super()

        this.state = {
            allPublicDecks: [],
            userInput: '', 
            foundDecks: []
        }
    }

    handleChange(value) {
        console.log(this.state.userInput)
        this.setState({
            userInput: value
        })
    }
    handleClick(){
        let found = this.state.allPublicDecks.filter((item, i) => {
            let name = item.deck_name.toLowerCase();
            let input = this.state.userInput.toLowerCase();
            return name.includes(input)});
        this.setState({
            foundDecks: found
        })
        console.log(this.state.foundDecks)
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
            return(
                <div key={i}>
                    <p>FOUND DECK: {item.deck_name}</p>
                    <p>with the category: {item.category}</p>
                </div>
            )
        });
        return (
            <div>
                <div style={{ color: 'red' }}> I will be the Search component</div>
                <input type='text' placeholder='Search for decks' value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={() => this.handleClick(this.state.userInput)}>Find Decks</button>
                {filteredDecks}
            </div>
        )
    }
}

export default Search;