import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDecksHome } from '../../ducks/reducer';

class Home extends Component {

    componentWillMount() {
        this.props.getDecksHome()
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div>I am the home</div>

                <div>
                                                     
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userDecks: state.userDecks
    }
}

export default connect(mapStateToProps, { getDecksHome })(Home);