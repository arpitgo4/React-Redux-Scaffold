
import { renderApp, } from '../index'; 
import { createBrowserHistory, } from 'history';
import AppRouter from '../layouts/App.Router';

describe('app', () => {

    it('should render', () => {
        renderApp(AppRouter, createBrowserHistory());
    });

});