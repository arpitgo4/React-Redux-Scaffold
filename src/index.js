
import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './layouts/App.Router';
import './index.html';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import './style.scss';

ReactDOM.render(
	<AppRouter />,
	document.getElementById('react-app')
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