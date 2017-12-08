import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button';
import ViewCards from '../Children/ViewCards';
import ViewDecks from '../Children/ViewDecks';

class DeckViewerM extends Component {
    constructor() {
        super();
        this.state = {
            cardView: true
        }
        this.toggleView = this.toggleView.bind(this);
    }

    toggleView() {
        let currentView = this.state.cardView;
        this.setState({
            cardView: !currentView
        })
    }

    render() {
        let display = this.state.cardView
                      ? <ViewCards /> 
                      : <ViewDecks />;
        return (
            <div>
                <div>
                    <ToggleButton
                        value={this.state.cardView}
                        onToggle={this.toggleView}
                        inactiveLabel={'Decks'}
                        activeLabel={'Cards'}
                    />
                </div>
                {display}
            </div>
        )
    }
}

export default DeckViewerM;