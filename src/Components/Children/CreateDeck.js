//erin flesh out starting 12/7
//functionality 12/8
//debugged 12/11
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import {withRouter} from 'react-router-dom';

import {createDeck, getUser} from './../../ducks/reducer';

class CreateDeck extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            currentDeck: {},
            deck_name: '',
            category: '',
            public: true,
            deck_card: 'deck',
            parent_id: this.props.currentDeck.deck_id ? this.props.currentDeck.deck_id : null,
            modalisOpen: false
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

    handleClick(e){
        let body = {
            deck_name: this.state.deck_name,
            category: this.state.category,
            public: this.state.public,
            deck_card: this.state.deck_card,
            parent_id: this.state.parent_id
        }
        // console.log(this.props.createDeck);
        this.props.createDeck(body, this.props.userData.userId);

        // createDeck(deck_name, category);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.currentDeck.deck_id !== null && nextProps.currentDeck.deck_id !== undefined){
            let newRoute = `/viewer/${nextProps.currentDeck.deck_id}`;
            console.log('newRoute', newRoute)
            return this.props.history.push(newRoute);
        }
    }
    render() {
        // console.log( 'deck body' , this.state.currentDeck);
        return (
            <div>
                <button onClick={this.openModal} className='home_btn'>Create Deck</button>
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
        currentDeck: state.currentDeck,
        userData: state.userData
    }
}

export default withRouter( connect(mapStateToProps, {createDeck, getUser})(CreateDeck));