import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import sandraDonationReducer from './reducers/sandraDonationReducer';
import helleviDonationReducer from './reducers/helleviDonationReducer';
import daynaDonationReducer from './reducers/daynaDonationReducer';

const store = createStore(
    combineReducers({
        sandraDonationReducer,
        helleviDonationReducer,
        daynaDonationReducer,
    })
);
console.log(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
