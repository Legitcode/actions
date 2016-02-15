var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './example/index.jsx' // Your appʼs entry point
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "http://localhost:8080/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        loaders: ['react-hot'], 
        include: __dirname + '/src' 
      },
      {
        test: /\.jsx|.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: __dirname
  },
  node: {
    __dirname: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
