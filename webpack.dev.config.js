const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const ENTRY_POINTS = [ './src/index' ];
const DEV_ENTRY_POINTS = [ 'webpack-hot-middleware/client' ].concat(ENTRY_POINTS);

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: { app: DEV_ENTRY_POINTS },
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
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      minRatio: 0
    })
  ],
  module: {
      loaders: [
      { test: /\.html$/, loaders: ['react-hot-loader', 'file-loader?name=[name].[ext]'], include: path.join(__dirname, 'src') },
      { test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader'], include: path.join(__dirname, 'src') },

      // loader config for vendor css and scss files
      { test: /\.css$/, loaders: [ 'style-loader', 'css-loader' ], exclude: path.join(__dirname, 'src') },
      { test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ], exclude: path.join(__dirname, 'src') },
      
      // loader config for app css and scss files, with css modules
      { test: /\.css$/, loaders: [ 'react-hot-loader', 'style-loader', 'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader' ], include: [ path.join(__dirname, 'src', 'components'), 
      path.join(__dirname, 'src', 'layouts' ) ] },
      { test: /\.scss$/, loaders: [ 'react-hot-loader', 'style-loader', 'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader', 'postcss-loader' ], include: [ path.join(__dirname, 'src', 'components'), 
      path.join(__dirname, 'src', 'layouts' ) ] },

      // global scss file configuration
      { test: /\.scss$|\.css$/, loaders: [ 'react-hot-loader', 'style-loader', 'css-loader', 'sass-loader', 'postcss-loader' ], include: [ path.join(__dirname, 'src', 'style.scss'),
      path.join(__dirname, 'src', 'media' )] }, 

      // loader config for images and fonts
      { test: /\.png$/, loader: 'file-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader?limit=100000' },
      
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff' }, //
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]' }, //
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=image/svg+xml'}//
    ]
  }
};
