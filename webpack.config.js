var path = require('path');
var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  entry: './app/index.js',

  output: {
    path: './build',
    filename: 'bundle.js', // deployable file
    publicPath: 'http://localhost:8080/build' // dev server
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,      
        loader: 'babel-loader',
        include: path.resolve(__dirname, "app") // must be fully qualified file path
      }
    ],
    plugins: [
      new NpmInstallPlugin()
    ],
  },
};
