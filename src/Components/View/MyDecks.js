import React, { Component } from 'react';
import axios from 'axios';
import { getUser } from './../../ducks/reducer';
import { connect } from 'react-redux';
import DeckCoverM from '../Children/DeckCoverM';



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
        axios.get('/api/user/decks')
            .then(res => {
                this.setState({
                    allParentDecks: res.data
                })
            })
    }


    render() {

        let userDecks = this.state.allParentDecks.map((item, i) => {
            return (

                <div key={i}>
                    <DeckCoverM
                        name={item.deck_name}
                        category={item.category}
                        deckid={item.deck_id}
                        public={item.public}
                        userID={this.props.id}
                        creatorID={item.creator_id} />
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

function mapStateToProps(state) {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps, { getUser })(MyDecks);