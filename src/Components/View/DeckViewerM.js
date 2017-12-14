import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggleButton from 'react-toggle-button';
import ViewCards from '../Children/ViewCards';
import ViewDecks from '../Children/ViewDecks';
import CardCoverM from '../Children/CardCoverM';

class DeckViewerM extends Component {
    constructor(props) {
        super(props);
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
                    <h2>{this.props.currentDeck.deck_name}</h2>
                    <h3>{this.props.currentDeck.category}</h3>
                </div>
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

function mapStateToProps(state) {
    return {
        currentDeck: state.currentDeck        
    };
}

export default connect(mapStateToProps, {})(DeckViewerM);

// Mark - Dec 8 - Connecting to redux and finishing functionality.