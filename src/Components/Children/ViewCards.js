import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardCoverM from './CardCoverM';

class ViewCards extends Component {
    render(){
        const cardList = this.props.currentDeck.cards.length
                         ? this.props.currentDeck.cards.map((card, i) => {
                             return (
                                 <CardCoverM 
                                    key = {i}
                                    question = {card.question}
                                    />
                             )
                         })
                         : 'null';
        return(
            <div>
                <button>STUDY!</button>
                <a href='/create-card'><button>Create Card</button></a>
                <div>
                    {cardList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentDeck: state.currentDeck
    };
}

export default connect(mapStateToProps, {})(ViewCards);
