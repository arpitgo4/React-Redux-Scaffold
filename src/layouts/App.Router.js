import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppLayout from './App.layout';
import Nodejs from '../components/Body/Nodejs.component';

const AppRouter = () => (
	<Router history={browserHistory}>
		<Route path="/" component={AppLayout} >
			<IndexRoute component={Nodejs} />														
			<Route path="express" getComponent={() => System.import('../components/Body/Expressjs.component')
															.then(c => c.default) } />
			<Route path="mongo" getComponent={() => System.import('../components/Body/Mongodb.component')
															.then(c => c.default) } />
			<Route path="react" getComponent={() => System.import('../components/Body/Reactjs.component')
															.then(c => c.default) } />
		</Route>
	</Router>
);

export default AppRouter;