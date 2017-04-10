
# Express-React-Scaffold [![Build Status](https://travis-ci.org/arpitgo4/Express-React-Scaffold.svg?branch=master)](https://travis-ci.org/arpitgo4/Express-React-Scaffold) [![Coverage Status](https://coveralls.io/repos/github/arpitgo4/Express-React-Scaffold/badge.svg?branch=master)](https://coveralls.io/github/arpitgo4/Express-React-Scaffold?branch=master)
Full stack JS scaffold with ExpressJS as the backend server and React-Redux on the client side. Scaffold supports production and development modes, with **Best Developer Experience** ( DX ) by Hot-Loading for the client side application and automatic server restarts for the backend server on code change. There will be no need to restart during development, hence making the experience smooth and decrease the delivery time.

## Scaffold Structure 

```
	.
	├── bin                         #  Backend server ( Express )
	|   └── www                     #  Express server configuration ( port, address, clustering )
	├── client                      #  Frontend complete source code                                
	|   ├── src                     #  Frontend source files
	|   |   ├── components          #  React component's source
	|   |   ├── config              #  Redux store's configuration
	|   |   ├── layouts             #  React layout component's source
	|   |   |   └── router.js 	#  React Router    
	|   |   ├── reducers            #  Redux reducer's source
	|   |   ├── index.html          #  Root HTML template
	|   |   ├── index.js            #  Frontend source entry point
	|   |   └── style.css           #  Global stylesheet
	|   ├── .babelrc                #  Babel configuration ( ES6, React, JSX )
	|   ├── .eslintrc               #  ESLint configuration
	|   └── devServer.js            #  Hot loading server source ( development mode )
	├── dist                        #  Compiled files     
	├── routes                      #  Route files
	|   └── index.js                #  REST/HTTP endpoints
	├── .gitignore                  #  Ignored files from git commit
	├── app.js                      #  Express server configuration ( routes, middlewares, models )
	├── LICENSE                     #  License to use the project
	├── package.json                #  Frontend and backend dependencies
	├── README.md                   #  This file
	└── webpack.config.js           #  Webpack configuration for 'production' and 'development' 
 
```

## Quick Start
### Just to check everything is working
```
# Install the dependencies
npm install

# Build the client 
npm run build-client:production

# Start the project ( it will build the client, before starting the server )
npm start

# Open web browser at http://localhost:8080
# You will see a sample Single Page Application
```

## Development
### Scaffold provides two npm scripts, execute both in seperate terminals
```	
# Start client in development mode with hot code loading,
npm run start-client:development

# Start backend server in development mode with nodemon ( server restarts on every change )
npm run start-server:development
```

Frontend and Backend dev servers will start at http://localhost:3000 and http://localhost:8080, respectively.
Hit frontend dev server to load application in the browser, enjoy developing :)

### Proxy Middleware
Client's development process will proxy all the API requests with `'/api'` in the URL to the backend server. `devServer.js` is in the `client/src` directory starts server at http://localhost:3000, which will provide all the hot loading functionality and proxy the API calls to the backend server process behind the scenes.
React-Hot-Loader is used to hot load the components without losing the current state or refreshing the browser. Redux store maintains all the state of the application in the single state object.

Refer to the [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate) for further description.
## Production
### Scaffold provides two production scripts
```
# Build the client for production deployment
npm run build-client:production

# Build the client for production deployment and start the backend server with 'forever' package
npm start 
```
Backend server will start at http://localhost:8080, inside **forever** process and bundled frontend client will be served from the `dist` directory.

## Known Limitations
* Hot Reloading of the Routes ( Browser refresh is needed! ).

## Feedback
In case of any query or feedback, please feel free to connect via
* arpit.go4@gmail.com (Arpit Goyal)

Or, open an issue at github.
