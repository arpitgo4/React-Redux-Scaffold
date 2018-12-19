import React from 'react';
import { ConnectedRouter, } from 'connected-react-router';
import { Match, Miss, Route, } from 'react-router';


import AppLayout from './App.layout';


const AppRouter = ({ history }) => (
	<ConnectedRouter history={history}>
		<Route path="/" component={AppLayout} />
	</ConnectedRouter>
);

export default AppRouter;