import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeckViewerD extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return(
            <div>DeckViewerD</div>            
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {})(DeckViewerD);
