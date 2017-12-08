import React, { Component } from 'react';
import axios from 'axios';



class MyDecks extends Component {
    constructor() {
        super()

        this.state = {
            allParentDecks: []
        }
    }
    //get all parent decks
    componentDidMount() {
        console.log(this.props);
        axios.get(`/api/decks${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    allParentDecks: res.data
                })
            })
    }
   

    render() {
        let userDecks = this.state.allParentDecks.map((item, i) => {
            return (
                <div key={item.deck_id}>
                    <h2>Deck Name: {item.deck_name}</h2>
                </div>
            )
        })

        return (
            <div>
                <div> I will show the user-created Decks</div>
                {userDecks}
            </div>
        )
    }
}


export default MyDecks;