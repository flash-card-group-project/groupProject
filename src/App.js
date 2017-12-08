import React, { Component } from 'react';
import './App.css';
import Header from './Components/Children/Header';
import Footer from './Components/Children/Footer';
import router from './router.js';
import { withRouter } from 'react-router-dom';


class App extends Component {
  render() {
    const headerOrNah=this.props.location.pathname!=='/'?<Header/>:null;
    return (
      <div className='App'>
        {headerOrNah}
        {router}
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
