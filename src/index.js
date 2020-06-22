import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMilddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancer(applyMiddleware(thunk))


ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, 

	document.getElementById('root'));


