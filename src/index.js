
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import { createBrowserHistory, } from 'history';

import './index.html';
import './style.scss';

import configureStore from './config/store.config';
import AppRouter from './layouts/App.Router';


const history = createBrowserHistory();

export const renderApp = (AppRouter, history) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={configureStore(history)}>
				<AppRouter history={history} />
			</Provider>
		</AppContainer>,
		document.getElementById('react-app')
	);
};

renderApp(AppRouter, history);

// for hot reloading router.
if(module.hot){
	module.hot.accept('./layouts/App.Router.js', () => {
		const updatedAppRouter = require('./layouts/App.Router.js').default;
		console.log('>>>>>> Router Updated !! <<<<<<<')
		renderApp(updatedAppRouter, history);
	});
}