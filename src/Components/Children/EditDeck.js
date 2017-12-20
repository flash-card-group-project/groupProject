import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {connect } from 'react-redux';
import editIcon from '../Assets/editing.png';
import {editDeck, getCurrentDeck, getDecksHome} from './../../ducks/reducer';

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
        // console.log('deck name', this.state.deck_name);
        this.setState({
            deck_name: e.target.value
        })
    }
    handleUserInput2(e){
        // console.log('category', this.state.category);
        this.setState({
            category: e.target.value
        })
    }
    handleClick = async (e) => {
        let body = {
            deck_name: this.state.deck_name,
            category: this.state.category
        }
        await this.props.editDeck(this.props.deckid, body);
        this.setState({
            modalisOpen: false
        })
        this.props.getDecksHome();
    }
    componentDidMount(){
        this.props.getCurrentDeck();
    }

    render() {
        return (
            <div>
                <button className="cover-button" onClick={this.openModal}><img src={editIcon} alt='Edit' /></button>
                <ReactModal
                    isOpen={this.state.modalisOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    aria={{
                        labelledby: 'heading',
                        describedby: 'full_description'
                            }}
                     ariaHideApp={false}>
                    <div className='text_area_container'>
                        <textarea 
                        placeholder= 'make me the value'
                        className='text_area'
                        value={this.state.deck_name} 
                        onChange={this.handleUserInput}/>
                        <textarea 
                        placeholder='make me the value'
                        className='text_area'
                        value={this.state.category} 
                        onChange={this.handleUserInput2}/>
                    </div>
                    <div  className="buttons">
                        <button onClick={this.closeModal} className='sml_btn'>Cancel</button>
                        <button onClick={this.handleClick} className='sml_btn'>Update</button>
                    </div>
                </ReactModal>
            </div>
        )
    }
}
function mapStateToProps(state){
    // console.log('state from editDeck', state);
    return{
        currentDeck: state.currentDeck
    }
}

export default connect(mapStateToProps, {editDeck, getCurrentDeck, getDecksHome})(EditDeck);