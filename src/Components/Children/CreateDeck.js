//erin flesh out starting 12/7
//functionality 12/8
import React, { Component } from 'react';
import {connect } from 'react-redux';

import {createDeck} from './../../ducks/reducer';

class CreateDeck extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            currentDecks: {},
            deck_name: '',
            category: ''
            // public: 
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleUserInput2 = this.handleUserInput2.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleUserInput(e){
        this.setState = {
            deck_name: e.target.value
        }
    }
    handleUserInput2(e){
        this.setState= {
            category: e.target.value
        }
    }
    componentDidMount(){
        console.log('createDeck', this.props.createDeck);
        this.props.createDeck();
    }
    handleClick(e){
        // console.log(this.props.createDeck);
        this.props.dispatch({
            type: 'UPDATE_CURRENT_DECK',
            payload: {
                deckInfo: {
                    deck_name: this.state.deck_name,
                    category: this.state.category
                }
            }
        })
        // createDeck(deck_name, category);
    }

    render() {
        return (
            <div className="card">
                <div>
                    <input placeholder="What do you want to call your deck?" value={this.state.deck_name} className="title-input" onChange={this.handleUserInput}/>
                    <input placeholder="What category is this in?" value={this.state.deck_name} className="category-input" onChange={this.handleUserInput2} />
                </div>
                    <div className="buttons">
                        <button>Cancel</button>
                        <button onClick={this.handleClick} >Submit</button>
                        {/* link to deck viewer component, create deck, update history */}
                    </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        currentDecks: state.currentDecks
    }
}

export default connect(mapStateToProps, {createDeck})(CreateDeck);