import { createStore, applyMiddleware, compose, } from 'redux';
import { routerMiddleware, } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


import initialState from './initialState.config';
import createRootReducer from '../reducers/index.reducer';


export default function configureStore(history) {
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	
	const middlewares = [
		createLogger(),	
		routerMiddleware(history),
		thunkMiddleware,
	];

	const store = createStore(
			createRootReducer(history), 
			initialState, 
			compose(applyMiddleware(...middlewares))
		);

	if(module.hot){
		// enable webpack hot module replacement for reducers
		module.hot.accept('../reducers/index.reducer', () => {
			// `default` is to extract the default entity from the export. 
			const nextReducer = require('../reducers/index.reducer').default; 
			store.replaceReducer(nextReducer);
		});
 	}

 	return store;
}