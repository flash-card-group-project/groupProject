import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';
import { createDeck, getUser } from './../../ducks/reducer';


const customStyles = {
    content: {
        position: 'absolute',
        top: '80px',
        left: '40px',
        right: '40px',
        bottom: '150px',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '10px'
    }
}
class CreateDeck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDeck: {},
            deck_name: '',
            category: '',
            public: true,
            deck_card: 'deck',
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
            parent_id: this.props.currentDeck.deck_id
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
                <button onClick={this.openModal} className='large_btn'>Create Deck</button>
                <ReactModal
                    isOpen={this.state.modalisOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    aria={{
                        labelledby: 'heading',
                        describedby: "full_description"
                    }}
                    ariaHideApp={false}>
                    <div className='modal_content'>
                        <div className='text_area_container'>
                            <textarea 
                            type='text'
                            name="deck" 
                            className='text_area'
                            placeholder="What do you want to call your deck?" 
                            value={this.state.deck_name}
                            onChange={this.handleUserInput} required 
                            />
                            <textarea 
                            type='text' 
                            name="deck" 
                            className='text_area'
                            placeholder="What category is this in?" 
                            value={this.state.category} 
                             onChange={this.handleUserInput2} 
                             required 
                             />
                            <p style={{ color: "red", fontSize: '12px' }} >{this.state.errorAlert}</p>
                        </div>
                        <div className="buttons">
                            <button onClick={this.closeModal} className='sml_btn'>Cancel</button>
                            <button onClick={this.handleClick} className='sml_btn'>Submit</button>
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentDeck: state.currentDeck,
        userData: state.userData
    }
}

export default withRouter(connect(mapStateToProps, { createDeck, getUser })(CreateDeck));