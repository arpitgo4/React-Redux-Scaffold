const path = require('path');
const webpack = require('webpack');

const ENTRY_POINTS = [ './src/index' ];

module.exports = {
  devtool: 'cheap-source-map',
  entry: { app: ENTRY_POINTS },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: 'chunks/[name]-[chunkhash].js',
    sourceMapFilename: 'bundle.map.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource) 
    })
  ],
  module: {
      loaders: [
      { test: /\.html$/, loaders: ['file-loader?name=[name].[ext]'], include: path.join(__dirname, 'src') },
      { test: /\.js$/, loaders: ['babel-loader'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loaders: [ 'style-loader', 'css-loader' ] },
      { test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.png$/, loader: 'file-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader?name=/images/[name].[ext]' },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff' }, //
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]' }, //
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=image/svg+xml'}//
    ]
  }
};
