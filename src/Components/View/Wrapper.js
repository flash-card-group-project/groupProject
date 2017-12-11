import React, { Component } from 'react';
import DeckViewerD from './DeckViewerD';
import DeckViewerM from './DeckViewerM';

export default class Wrapper extends Component {
  render() {
    let width = window.innerWidth;
    if (width > 1199) {
      return (
        <div>
          <DeckViewerD />
        </div>
      );
    } else {
      return (
        <div>
          <DeckViewerM />
        </div>
      );
    }
  }

}