const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

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
          plugins: ['react-refresh/babel'],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
  },

  devServer: {
    hot: true,
    devMiddleware: {
      publicPath: '/dist',
    },
    static: { directory: path.resolve(__dirname, 'public') },
  },
};
