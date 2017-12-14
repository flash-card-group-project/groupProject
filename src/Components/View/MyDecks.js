import React, { Component } from 'react';
import axios from 'axios';
import { getUser } from './../../ducks/reducer';
import { connect } from 'react-redux';
import DeckCoverM from '../Children/DeckCoverM';
import CreateDeck from '../Children/CreateDeck';




class MyDecks extends Component {
    constructor() {
        super()

        this.state = {
            allParentDecks: []
        }
    }
    //get all parent decks
    // componentDidMount() {
    //     // console.log(this.props);
    //     axios.get('/api/user/decks')
    //         .then(res => {
    //             this.setState({
    //                 allParentDecks: res.data
    //             })
    //         })
    // }


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
        }
        )

        return (
            <div className='search_container'>
                <div> I will show the user-created Decks</div>
                <CreateDeck/>
                {userDecks}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userData: state.userData,
        userDecks: state.userDecks
    }
}

export default connect(mapStateToProps, { getUser })(MyDecks);