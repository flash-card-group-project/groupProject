//erin flesh out starting 12/7
//functionality 12/8
//debugged 12/11
import React, { Component } from 'react';
import {connect } from 'react-redux';
import ReactModal from 'react-modal';

import {createDeck} from './../../ducks/reducer';

class CreateDeck extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            currentDeck: {},
            deck_name: '',
            category: '',
            public: true,
            deck_card: 'deck',
            modalisOpen: false
            // cards: null
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleUserInput2 = this.handleUserInput2.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    openModal(){
        this.setState({modalisOpen : true});
    }
    closeModal(){
        this.setState({modalisOpen: false});
    }
    handleUserInput(e){
        this.setState({
            deck_name: e.target.value
        })
    }
    handleUserInput2(e){
        this.setState({
            category: e.target.value
        })
    }
    // componentDidMount(){
    //     console.log('createDeck', this.props.createDeck);
    //     this.props.createDeck();
    // }
    handleClick(e){
        let body = {
            deck_name: this.state.deck_name,
            category: this.state.category,
            public: this.state.public,
            deck_card: this.state.deck_card
        }
        // console.log(this.props.createDeck);
        this.props.createDeck(body);
        // createDeck(deck_name, category);
    }

    render() {
        console.log( 'deck body' , this.state.currentDeck);
        return (
            <div className="deck">
                <button onClick={this.openModal}>Create Deck</button>
                <ReactModal
                isOpen= {this.state.modalisOpen}
                onRequestClose= {this.closeModal}
                aria = {{
                    labelledby: 'heading',
                    describedby: "full_description"
                
                }}> 
                <div>
                    <textarea type='text' placeholder="What do you want to call your deck?" value={this.state.deck_name} className="title-input" onChange={this.handleUserInput} />
                    <textarea type='text' placeholder="What category is this in?" value={this.state.category} className="category-input" onChange={this.handleUserInput2} />
                </div>
                    <div className="buttons">
                        <button className="cancel" onClick={this.closeModal} >Cancel</button>
                        <button className="submit" onClick={this.handleClick} >Submit</button>
                        {/* link to deck viewer component, create deck, update history */}
                    </div>
                    </ReactModal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log('state from createDeck', state);
    return{
        currentDeck: state.currentDeck
    }
}

export default connect(mapStateToProps, {createDeck})(CreateDeck);