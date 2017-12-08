import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button';

class DeckViewerM extends Component {
    constructor(){
        super();
        this.state = {
            cardView: true
        }
        this.toggleView = this.toggleView.bind(this);
    }

    toggleView(){
        let currentView = this.state.cardView;
        this.setState({
            cardView: !currentView
        })
    }

    render() {
        return (
            <div>
                <div>
                    <ToggleButton
                        value={ this.state.cardView}
                        onToggle={this.toggleView}
                        inactiveLabel={'Decks'}
                        activeLabel={'Cards'}
                         />
                </div>
                
                <div>

                </div>
            </div>
        )
    }
}

export default DeckViewerM;