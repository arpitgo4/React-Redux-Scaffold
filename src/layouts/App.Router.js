import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router';

import AppLayout from './App.layout';

import NodeJS from '../components/Body/Nodejs.component';
import ExpressJS from '../components/Body/Expressjs.component';
import ReactJS from '../components/Body/Reactjs.component';
import MongoDB from '../components/Body/Mongodb.component';

const AppRouter = () => (
	<Router history={browserHistory}>
		<Route path="/" component={AppLayout} >
			<IndexRoute component={NodeJS} />
			<Route path="express" component={ExpressJS} />
			<Route path="mongo" component={MongoDB} />
			<Route path="react" component={ReactJS} />
		</Route>
	</Router>
);

export default AppRouter;