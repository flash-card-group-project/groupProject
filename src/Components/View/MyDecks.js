import React, { Component } from 'react';
import axios from 'axios';
import { getUser } from './../../ducks/reducer';
import { connect } from 'react-redux';


class MyDecks extends Component {
    constructor() {
        super()

        this.state = {
            allParentDecks: []
        }
    }
    //get all parent decks
    componentDidMount() {
        // console.log(this.props);
        axios.get(`/api/decks/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    allParentDecks: res.data
                })
            })
    }


    render() {
        let userDecks = this.state.allParentDecks.map((item, i) => {
            return (
                <div className='deck_results' key={item.deck_id}>
                    <div className='deck_found' >
                        <h2 className='deck_name'>Deck Name: {item.deck_name}</h2>
                        <h3 className='deck_category'>Category: {item.category}</h3>
                    </div>

                    <div className='boxes'>
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                    </div>
                </div>
            )
        })

        return (
            <div className='search_container'>
                <div> I will show the user-created Decks</div>
                {userDecks}
            </div>
        )
    }
}

export default MyDecks;