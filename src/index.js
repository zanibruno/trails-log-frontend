import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import locationReducer from './reducers/locationReducer.js'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(locationReducer, composeEnhancer(applyMiddleware(thunk)))


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>
	, 
	document.getElementById('root'));


