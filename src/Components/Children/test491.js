import React, { Component } from 'react';
import DeckCoverM from './DeckCoverM';
import CardCoverM from './CardCoverM';
import DeckCoverD from './DeckCoverD';
import CardCoverD from './CardCoverD';

class TestOnly extends Component {

    render() {
        return (
            <div>
                <h1>This component is for testing child components only.</h1>
                <DeckCoverM />
            </div>
        )
    };
}