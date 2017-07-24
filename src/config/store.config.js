import { createStore } from 'redux';
import RootReducer from '../reducers/index.reducer';

export default function configureStore({ initialState }) {
	const store = createStore(RootReducer, initialState);

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