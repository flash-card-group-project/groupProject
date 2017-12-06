import React, { Component } from 'react';
import './App.css';
import Header from './Components/Children/Header';
import router from './router.js';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        {router}
      </div>
    );
  }
}

export default App;
