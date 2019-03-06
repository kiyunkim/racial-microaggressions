const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'dev';
console.log(process.env.NODE_ENV);

const baseConfig = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: {
    app: path.join(__dirname, 'src', 'app.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-env'],
             plugins: ['@babel/plugin-transform-runtime']
           }
         }
      },
      {
        test: /\.css$/,
        include: /src/,
        use: ['style-loader/url', 'file-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true, // dont run my app inside the webpack iframe
    stats: 'errors-only',
    port: 8000
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'title',
      header: 'header',
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true,
      chunks: ['app'] // name of the bundle, determined by the key in line 6. add only this bundle
    })
  ]
}

if (isDev) {
  baseConfig.plugins.push(
    // new plugin
  )
}

module.exports = baseConfig;