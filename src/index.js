import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './ducks/store';

ReactDOM.render(
    <BrowserRouter>

        <Provider store = {store}>

            <App />
            
        </Provider>
        
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();
