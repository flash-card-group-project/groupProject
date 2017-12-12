import React, {Component} from 'react';
import ReactModal from 'react-modal';

class EditDeck extends Component{
    constructor(props){
        super(props)

        this.state = {
            modalisOpen: false 
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal(){
        this.setState({modalisOpen: true});
    }
    closeModal(){
        this.setState({modalisOpen: false});
    }

    render(){
        return (
            <div className= "edit-deck">
                <button onClick={this.openModal} className="home_btn">Edit My Deck</button>
                <ReactModal
                isOpen= {this.state.modalisOpen}
                onRequestClose= {this.closeModal}
                aria = {{
                    labelledby: 'heading',
                    describedby: 'full_description'
                }} >
                <div>
                <textarea placeholder="Insert deck's new name" className="title-input" />
                <textarea placeholder="Insert deck's new category" className="category-input" />
                </div>
                <div>
                    <button onClick={this.closeModal}>Cancel</button>
                    <button>Submit</button>
                </div>
                </ReactModal>
            </div>
        )
    }
}

export default EditDeck;