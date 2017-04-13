var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.dev.config');

var app = express();
var compiler = webpack(config);

const devConfig = config.devServer;

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('FrontEnd Server Listening at http://localhost:3000/');
});
