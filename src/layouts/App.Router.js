import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from '../config/store.config';
import AppLayout from './App.layout';
import Nodejs from '../components/containers/Body/Nodejs.component';

const AppRouter = () => (
	<Provider store={configureStore({ initialState: {} })}>
		<Router history={browserHistory}>
			<Route path="/" component={AppLayout} >
				<IndexRoute component={Nodejs} />														
				<Route path="express" getComponent={() => System.import('../components/containers/Body/Expressjs.component')
																.then(c => c.default) } />
				<Route path="mongo" getComponent={() => System.import('../components/containers/Body/Mongodb.component')
																.then(c => c.default) } />
				<Route path="react" getComponent={() => System.import('../components/containers/Body/Reactjs.component')
																.then(c => c.default) } />
			</Route>
		</Router>
	</Provider>
);

export default AppRouter;