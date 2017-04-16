import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import AppLayout from './App.layout';

import NodeJS from '../components/Body/Nodejs.component';
/*import ExpressJS from '../components/Body/Expressjs.component';
import ReactJS from '../components/Body/Reactjs.component';
import MongoDB from '../components/Body/Mongodb.component';*/

const AppRouter = () => (
	<Router history={browserHistory}>
		<Route path="/" component={AppLayout} >
			<IndexRoute component={NodeJS} />
			<Route path="express" getComponent={() => System.import('../components/Body/Expressjs.component')
															.then(c => c.default) } />
			<Route path="mongo" getComponent={() => System.import('../components/Body/Mongodb.component')
															.then(c => c.default)} />
			<Route path="react" getComponent={() => System.import('../components/Body/Reactjs.component')
															.then(c => c.default)} />
		</Route>
	</Router>
);

export default AppRouter;