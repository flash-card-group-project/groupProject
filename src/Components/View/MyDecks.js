import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckCoverM from '../Children/DeckCoverM';
import CreateDeck from '../Children/CreateDeck';
import { clearCurrentDeck, getUser } from '../../ducks/reducer';

class MyDecks extends Component {

    componentDidMount() {
        this.props.clearCurrentDeck();
    }

    constructor() {
        super()
        this.state = {
            allParentDecks: []
        }
    }
    
    render() {
        let parentArr = this.props.userDecks.filter((item) => {
            return (item.parent_id === null)
        })

        let userDecks = parentArr.map((item, i) => {
            return (
                <DeckCoverM
                    key={i}
                    name={item.deck_name}
                    category={item.category}
                    deckid={item.deck_id}
                    public={item.public}
                    userID={this.props.id}
                    creatorID={item.creator_id}
                />
            )
        })

        return (
            <div className='my_decks_bod'>
                <CreateDeck/>
                <div className='user_decks'>
                {userDecks}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('state from myDecks', state);
    return {
        userData: state.userData,
        userDecks: state.userDecks
    }
}

export default connect(mapStateToProps, { getUser, clearCurrentDeck })(MyDecks);