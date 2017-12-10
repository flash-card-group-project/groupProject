import React, { Component } from 'react';
import axios from 'axios';

class DeckCoverM extends Component {

    constructor(props) {
        super(props)

        this.state = {
            decks : 1,
            // decks : this.props.match.params.decks,
            deck_info : [{deck_name: 'react', category: 'javascript'},{deck_name: 'redux', category: 'react'}]
        };
    };

    componentDidMount() {
        axios.get(`/api/decks/${this.state.decks}`).then(response => {

            this.setState({
                deck_info: response.data
            });
        })
    };

    // componentWillReceiveProps(nextProps) {
    //     axios.get(`/api/decks/${nextProps.match.params.decks}`).then(response => {

    //         this.setState({
    //             deck_info: response.data
    //         });
    //     })
    // };

    privatePublicToggle(){
        
    };

    favoriteToggle(){

    };

    editDeck(){

    };

    deleteDeck(){

    };

    render() {
        let deckCoverList = this.state.deck_info.map((item, index) => {
            return (
                <div key={index} className="deck-cover">
                    <div className="name-category">
                        <h3> {item.deck_name} </h3>
                        <h3> {item.category} </h3>
                    </div>
                    <div className="d-buttons">
                        <div>
                            <button onClick={this.privatePublicToggle.bind(this)}></button>
                            <button onClick={this.favoriteToggle.bind(this)}></button>
                        </div>
                        <div>
                            <button onClick={this.editCard.bind(this)}></button>
                            <button onClick={this.deleteCard.bind(this)}></button>
                        </div>
                    </div>


                </div>
            )
        })
        return (
            {deckCoverList}
        )
    }
};

export default DeckCoverM;

// Kevin