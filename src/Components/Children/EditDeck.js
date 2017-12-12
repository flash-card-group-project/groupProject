import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {connect } from 'react-redux';

import {editDeck} from './../../ducks/reducer';

class EditDeck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalisOpen: false,
            deck_name: '',
            category: '',
            currentDeck: {}
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleUserInput2 = this.handleUserInput2.bind(this);
    }
    openModal() {
        this.setState({ modalisOpen: true });
    }
    closeModal() {
        this.setState({ modalisOpen: false });
    }
    handleUserInput(e){
        console.log('deck name', this.state.deck_name);
        this.setState({
            deck_name: e.target.value
        })
    }
    handleUserInput2(e){
        console.log('category', this.state.category);
        this.setState({
            category: e.target.value
        })
    }
    handleClick(e){
        let body = {
            deck_name: this.state.deck_name,
            category: this.state.category
        }
        this.props.editDeck(this.props.match.params.deck_id, body);
    }

    render() {
        return (
            <div className="edit-deck">
                <button onClick={this.openModal} className="edit-btn">Edit My Deck</button>
                <ReactModal
                    isOpen={this.state.modalisOpen}
                    onRequestClose={this.closeModal}
                    aria={{
                        labelledby: 'heading',
                        describedby: 'full_description'
                    }} >
                    <div>
                        <textarea placeholder="Insert deck's new name" className="title-input" value={this.state.deck_name} onChange={this.handleUserInput}/>
                        <textarea placeholder="Insert deck's new category" className="category-input" value={this.state.category} onChange={this.handleUserInput2}/>
                    </div>
                    <div>
                        <button onClick={this.closeModal}>Cancel</button>
                        <button onClick={this.handleClick} >Update</button>
                    </div>
                </ReactModal>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log('state from editDeck', state);
    return{
        currentDeck: state.currentDeck
    }
}

export default connect(mapStateToProps, {editDeck})(EditDeck);