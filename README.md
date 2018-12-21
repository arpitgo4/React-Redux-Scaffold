
# React-Redux-Scaffold [![Build Status](https://travis-ci.org/arpitgo4/React-Redux-Scaffold.svg?branch=master)](https://travis-ci.org/arpitgo4/React-Redux-Scaffold)
Client side scaffold with React-Redux on the frontend and Express server to serve built files in the production mode. Scaffold supports production and development modes, with **Best Developer Experience** ( DX ) by Hot-Loading for the client side application. There will be no need to restart during development, hence making the experience smooth and decrease the delivery time.

## Scaffold Structure 

```
	.
	├── src                     	#  Frontend source files
	|	├── actions					#  Action Creators
	|   ├── components          	#  React component's source
	|   ├── config              	#  Redux store's configuration
	|   ├── layouts             	#  React layout component's source
	|   |   └── App.Router.js 		#  React Router    
	|   ├── reducers            	#  Redux reducer's source
	|   ├── index.html          	#  Root HTML template
	|   ├── index.js            	#  Frontend source entry point
	|   └── style.scss           	#  Global Sass stylesheet
	├── .babelrc                	#  Babel configuration ( ES6, React, JSX )
	├── .eslintrc               	#  ESLint configuration
	├── .travis.yml 				#  Travis CI configuration file
	├── devServer.js            	#  Hot loading server source ( development mode )
	├── Dockerfile					#  Docker build script
	├── dist                        #  Compiled files
	├── .gitignore                  #  Ignored files from git commit
	├── nginx.conf                  #  Nginx production server configuration
	├── LICENSE                     #  License to use the project
	├── package.json                #  Frontend dependencies
	├── postcss.config.js 			#  PostCSS configuration
	├── Procfile					#  Heroku procfile, for deployment
	├── README.md                   #  This file
	├── webpack.config.js           #  Webpack configuration for 'production' & 'development' 
```

## Development
```	
# Start client in development mode with hot code loading,
docker run --rm -it -p 3000:3000 -v $(pwd):/usr/src/app react-redux-scaffold

# Open web browser at http://localhost:3000
# Hit frontend dev server to load application in the browser, enjoy developing :)
```

Refer to the [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate) for further description.

## Production
```
# Docker image build
docker build -t react-redux-scaffold .

# Start the project
docker run --rm -p 80:80 react-redux-scaffold

# Open web browser at http://localhost
# You will see a sample Single Page Application
```

Backend server will start at http://localhost:8080 or the value provided in PORT environment variable, inside **forever** process and bundled frontend client will be served from the `dist` directory.

## Known Limitations
* Hot Reloading of the Routes ( Browser refresh is needed! ).

## Feedback
In case of any query or feedback, please feel free to connect via
* arpit.go4@gmail.com (Arpit Goyal)

Or, open an issue at github.
