
# React-Redux-Scaffold [![Build Status](https://travis-ci.org/arpitgo4/React-Redux-Scaffold.svg?branch=master)](https://travis-ci.org/arpitgo4/React-Redux-Scaffold)
Client side scaffold with React-Redux on the frontend and Express server to serve built files in the production mode. Scaffold supports production and development modes, with **Best Developer Experience** ( DX ) by Hot-Loading for the client side application. There will be no need to restart during development, hence making the experience smooth and decrease the delivery time.

## Scaffold Structure 

```
	.
	├── src                     	#  Frontend source files
	|   ├── components          	#  React component's source
	|   ├── config              	#  Redux store's configuration
	|   ├── layouts             	#  React layout component's source
	|   |   └── App.Router.js 	#  React Router    
	|   ├── reducers            	#  Redux reducer's source
	|   ├── index.html          	#  Root HTML template
	|   ├── index.js            	#  Frontend source entry point
	|   └── style.scss           	#  Global Sass stylesheet
	├── .babelrc                	#  Babel configuration ( ES6, React, JSX )
	├── .eslintrc               	#  ESLint configuration
	├── .travis.yml 		#  Travis CI configuration file
	├── devServer.js            	#  Hot loading server source ( development mode )
	├── dist                        #  Compiled files
	├── .gitignore                  #  Ignored files from git commit
	├── server.js                   #  Express server to serve index.html and other assets
	├── LICENSE                     #  License to use the project
	├── package.json                #  Frontend and backend dependencies
	├── Procfile			#  Heroku procfile, for deployment
	├── README.md                   #  This file
	├── webpack.config.js           #  Webpack configuration for 'production' 
	└── webpack.dev.config.js 	#  Webpack configuration for 'development' 
```

## Quick Start
### Just to check everything is working
```
# Install the dependencies
npm install

# Build the client 
npm run build:production

# Start the project ( it will build the client, before starting the server )
npm start

# Open web browser at http://localhost:8080
# You will see a sample Single Page Application
```

## Development
### Scaffold provides two npm scripts, execute both in seperate terminals
```	
# Start client in development mode with hot code loading,
npm run start:development
```

Hit frontend dev server to load application in the browser, enjoy developing :)

Refer to the [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate) for further description.
## Production
### Scaffold provides two production scripts
```
# Build the client for production deployment
npm run build:production

# Build the client for production deployment and start the backend server with 'forever' package
npm start 
```
Backend server will start at http://localhost:8080 or the value provided in PORT environment variable, inside **forever** process and bundled frontend client will be served from the `dist` directory.

## Known Limitations
* Hot Reloading of the Routes ( Browser refresh is needed! ).

## Feedback
In case of any query or feedback, please feel free to connect via
* arpit.go4@gmail.com (Arpit Goyal)

Or, open an issue at github.
