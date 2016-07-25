var webpack = require('webpack');

module.exports = {
  target: 'web',
  entry: './src/popover.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'react-popover.js',
    library: 'ReactPopover',
    libraryTarget: "var",
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel'],
    }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};
