import React, { Component } from 'react';
import './App.css';
import Header from './Components/Children/Header';
import Footer from './Components/Children/Footer';
import router from './router.js';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        {router}
        <Footer />
      </div>
    );
  }
}

export default App;
