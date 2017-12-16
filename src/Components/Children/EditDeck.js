import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {connect } from 'react-redux';
import editIcon from '../Assets/editing.png';
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
        this.props.editDeck(this.props.deckid, body);
        this.setState({
            modalisOpen: false
        })
    }

    render() {
        return (
            <div>
                <button className="cover-button" onClick={this.openModal}><img src={editIcon} alt='Edit' /></button>
                <ReactModal
                    isOpen={this.state.modalisOpen}
                    onRequestClose={this.closeModal}
                    aria={{
                        labelledby: 'heading',
                        describedby: 'full_description'
                    }} >
                    <div>
                        <textarea placeholder="Insert deck's new name" className="title-update" value={this.state.deck_name} onChange={this.handleUserInput}/>
                        <textarea placeholder="Insert deck's new category" className="category-update" value={this.state.category} onChange={this.handleUserInput2}/>
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