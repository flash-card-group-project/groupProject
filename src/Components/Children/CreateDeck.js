//erin flesh out starting 12/7
//functionality 12/8
//debugged 12/11
//route works 12/14
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';

import { createDeck, getUser } from './../../ducks/reducer';

class CreateDeck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDeck: {},
            deck_name: '',
            category: '',
            public: true,
            deck_card: 'deck',
            parent_id: this.props.currentDeck.deck_id ? this.props.currentDeck.deck_id : null,
            modalisOpen: false,
            errorAlert: ''
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleUserInput2 = this.handleUserInput2.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.submitModalClick = this.submitModalClick.bind(this);
        this.handleAlert = this.handleAlert.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }
    openModal() {
        this.setState({ modalisOpen: true });
    }
    closeModal() {

        this.setState({ modalisOpen: false });
    }
    handleUserInput(e) {
        this.setState({
            deck_name: e.target.value
        })
    }
    handleUserInput2(e) {
        this.setState({
            category: e.target.value
        })
    }

    submitModalClick() {
        let body = {
            deck_name: this.state.deck_name,
            category: this.state.category,
            public: this.state.public,
            deck_card: this.state.deck_card,
            parent_id: this.state.parent_id
        }
        this.props.createDeck(body, this.props.userData.userId);
        this.closeModal();
    }
    handleAlert() {
        this.setState({ errorAlert: "can't submit an empty deck" });
    }
    validateInput(categoryInput, nameInput) {
        return categoryInput.length > 0 && nameInput.length > 0 ?
            this.submitModalClick() : this.handleAlert();
    }
    handleValidate() {
        let categoryInput = this.state.category;
        let nameInput = this.state.deck_name;
        this.validateInput(categoryInput, nameInput);
    }
    handleClick(e) {
        this.handleValidate();
        this.setState({
            deck_name: '',
            category: ''
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentDeck.deck_id !== null && nextProps.currentDeck.deck_id !== undefined) {
            if (this.props.currentDeck.deck_id === nextProps.currentDeck.deck_id) {
                return
            }
            else if (nextProps.match.path !== '/home' || this.props.match.path === '/home') {
                let newRoute = `/viewer/${nextProps.currentDeck.deck_id}`;
                return this.props.history.push(newRoute);
            }

        }
    }
    render() {
        return (
            <div>
                <button onClick={this.openModal} className='home_btn'>Create Deck</button>
                <ReactModal
                    isOpen={this.state.modalisOpen}
                    onRequestClose={this.closeModal}
                    aria={{
                        labelledby: 'heading',
                        describedby: "full_description"
                    }}>
                    <div>
                        <textarea type='text' name="deck" placeholder="What do you want to call your deck?" value={this.state.deck_name} className="title-input" onChange={this.handleUserInput} required />
                        <textarea type='text' name="deck" placeholder="What category is this in?" value={this.state.category} className="category-input" onChange={this.handleUserInput2} required />
                        <p style={{ color: "red", fontSize: '12px' }} >{this.state.errorAlert}</p>
                    </div>
                    <div className="buttons">
                        <button className="cancel" onClick={this.closeModal} >Cancel</button>
                        <button className="submit" onClick={this.handleClick} >Submit</button>
                    </div>
                </ReactModal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log('state from createDeck', state);
    return {
        currentDeck: state.currentDeck,
        userData: state.userData
    }
}

export default withRouter(connect(mapStateToProps, { createDeck, getUser })(CreateDeck));