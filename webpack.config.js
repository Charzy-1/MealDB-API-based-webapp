const path = require('path');

module.exports = {
  entry: './src/ui.js', 
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js', 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devtool: 'source-map', // Helps with debugging
};
