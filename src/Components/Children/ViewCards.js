import React, { Component } from 'react';

class ViewCards extends Component {
    render(){
        
        return(
            <div>
                <button>STUDY!</button>
                <a href='/create-card'><button>Create Card</button></a>
                <div>
                    Div that renders all cards in the deck.
                </div>
            </div>
        )
    }
}

export default ViewCards;