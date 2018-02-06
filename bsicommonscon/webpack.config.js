const webpack = require('webpack');
const path = require('path');
const ConfigurationHandlerPlugin = require('./src/js/build/webpack_plugins');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8383', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve(__dirname, 'src/js') + '/containerMain.js'
  ],
  output: {
    filename: 'containerOutput.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }

      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  externals: {
    fs: '{}',
    tls: '{}',
    net: '{}',
    console: '{}'
  },
  resolve: {
    extensions: ['jsx', '.js', '.css']

  },
  devtool: "source-map",
  devServer: {
    hot: true,
    host: 'localhost',
    port: '8080',
    inline: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ConfigurationHandlerPlugin()
  ]
};
// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  config.devtool = ""; // No sourcemap for production
  // Add more configuration for production here like
  // Uglify plugin
  // Offline plugin
  // Etc,
}
module.exports = config;