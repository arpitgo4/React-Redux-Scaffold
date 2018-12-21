const { NODE_ENV, } = process.env;

const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

let ENTRY_POINTS = [ './src/index' ];

if (NODE_ENV === 'development') {
  ENTRY_POINTS = [
    'react-hot-loader/patch', 
    'webpack-hot-middleware/client',
  ].concat(ENTRY_POINTS);
}


module.exports = {
  devtool: NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'cheap-source-map',
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource) 
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      cache: true,
      deleteOriginalAssets: true,
    }),
    new webpack.DefinePlugin({
      NODE_ENV: `'${process.env.NODE_ENV}'`,
    }),
  ],
  module: {
      loaders: [
      { test: /\.html$/, loaders: ['file-loader?name=[name].[ext]'], include: path.join(__dirname, 'src') },
      { test: /\.js$/, loaders: ['babel-loader'], include: path.join(__dirname, 'src') },

      // loader config for vendor css and scss files
      { test: /\.css$/, loaders: [ 'style-loader', 'css-loader' ], exclude: path.join(__dirname, 'src') },
      { test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ], exclude: path.join(__dirname, 'src') },

      // loader config for app css and scss files, with css modules.
      { test: /\.css$/, loaders: [ 'style-loader', 'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader' ], include: [ path.join(__dirname, 'src', 'components'),
      path.join(__dirname, 'src', 'layouts') ]},
      { test: /\.scss$/, loaders: [ 'style-loader', 'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader' , 'postcss-loader' ], include: [ path.join(__dirname, 'src', 'components'),
      path.join(__dirname, 'src', 'layouts') ]},

      // global scss file configuration, without css modules
      { test: /\.scss$|\.css$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader', 'postcss-loader' ], include: [ path.join(__dirname, 'src', 'style.scss'),
        path.join(__dirname, 'src', 'media' ) ]
      },
      
      { test: /\.png$/, loader: 'file-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader?limit=100000' },

      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff' }, //
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]' }, //
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=image/svg+xml'}//
    ]
  }
};
