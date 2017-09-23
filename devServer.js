const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.dev.config');

const app = express();
const compiler = webpack(config);

const devConfig = config.devServer;

// middleware to serve gzipped js file.
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('FrontEnd DevServer Listening at http://localhost:3000/');
});
