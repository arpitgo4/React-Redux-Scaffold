import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import initialState from '../config/initialState.config';
import configureStore from '../config/store.config';
import AppLayout from './App.layout';
import Nodejs from '../components/containers/Nodejs/Nodejs.component';

export default class AppRouter extends Component {

	render() {
		return (
			<Provider store={configureStore({ initialState })}>
				<Router history={browserHistory}>
					<Route path="/" component={AppLayout} >
						<IndexRoute component={Nodejs} />														
						<Route path="express" getComponent={() => System.import('../components/containers/Expressjs/Expressjs.component')
																		.then(c => c.default) } />
						<Route path="mongo" getComponent={() => System.import('../components/containers/Mongodb/Mongodb.component')
																		.then(c => c.default) } />
						<Route path="react" getComponent={() => System.import('../components/containers/Reactjs/Reactjs.component')
																		.then(c => c.default) } />
					</Route>
				</Router>
			</Provider>
		);
	}

}