import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDecksHome, getFavorites, getUser } from '../../ducks/reducer';
import ToggleButton from 'react-toggle-button';
import ViewCards from '../Children/ViewCards';
import ViewDecks from '../Children/ViewDecks';
// import CardCoverM from '../Children/CardCoverM';
// import EditDeck from '../Children/EditDeck';

class DeckViewerM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardView: true
        }
        this.toggleView = this.toggleView.bind(this);
    }

    componentDidMount() {
        this.props.getDecksHome();
        this.props.getFavorites();
        this.props.getUser();
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
            <div className='deck_viewer_m'>
                <div className='dv_titles'>
                    <h2>Deck Name </h2>
                        <p>{this.props.currentDeck.deck_name}</p>
                    <h2>Category </h2>
                    <p>{this.props.currentDeck.category}</p>
                </div>
                <div className='toggle_bttn'>
                    <ToggleButton
                        trackStyle={{width:'100px',height:'30px'}}
                        thumbAnimateRange={[1,80]}
                        activeLabelStyle={{ width:'50px'}} 
                        inactiveLabelStyle={{ width:'100px'}}
                        value={this.state.cardView}
                        onToggle={this.toggleView}
                        inactiveLabel={'Sub-Decks'}
                        activeLabel={'Cards'}
                        containerStyle={{display:'inline-block',width:'500px'}} 
                    />
                </div>
                <div className='info_displayer'>
                {display}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentDeck: state.currentDeck        
    };
}

export default connect(mapStateToProps, { getDecksHome, getFavorites, getUser })(DeckViewerM);

// Mark - Dec 8 - Connecting to redux and finishing functionality.