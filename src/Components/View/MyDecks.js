import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';


class MyDecks extends Component {
    constructor() {
        super()

        this.state = {
            allParentDecks: []
        }
    }
    //get all parent decks
    componentDidMount() {
        axios.get('/api/decks')
            .then(res => {
                this.setState({
                    allParentDecks: res.data
                })
                console.log("User-Created decks:",res.data)
            })
    }
   

    render() {
        let userDecks = this.state.allParentDecks.map((item, i) => {
            return (
                <div key={item.deck_id}>
                    <h2>Deck Name: {item.deck_name}</h2>
                    <h3>Subdeck: {item.category}</h3>
                </div>
            )
        })

        return (
            <div>
                <div> I will show the user-created Decks</div>
                {userDecks}
                <Search/>
            </div>
        )
    }
}


export default MyDecks;