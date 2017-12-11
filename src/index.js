import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './ducks/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Provider>
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();