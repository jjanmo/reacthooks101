const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'employee-crud',
  mode: 'development',
  resolve: {
    extensions: ['.js'],
  },

  entry: {
    main: './src/index',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 1% in KR'],
                },
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};
