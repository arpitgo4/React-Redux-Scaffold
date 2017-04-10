
import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './layouts/App.Router';
import './index.html';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './style.css';

ReactDOM.render(
	<AppRouter />,
	document.getElementById('root')
);

// for hot reloading this router component.
if(module.hot){
	module.hot.accept('./layouts/App.Router.js', () => {
		const AppRouter = require('./layouts/App.Router.js').default;
		console.log('>>>>>> Router Updated !! <<<<<<<')
		ReactDOM.render(
			<AppRouter />,
			document.getElementById('root')
		);
	});
}