const webpack             = require('webpack')
const path                = require('path')
const HtmlWebpack         = require('html-webpack-plugin')
const ExtractTextPlugin   = require("extract-text-webpack-plugin")
const assetsHashGenerator = new webpack.HashedModuleIdsPlugin()

const htmlInject = new HtmlWebpack({ template: './app/index.html', hash: true })

// Compile less files into separate CSS file
const extractLess = new ExtractTextPlugin({
  filename: 'app.css'
})

// Combine app dependencies into separate file
const vendorChunk = new webpack.optimize.CommonsChunkPlugin({
  name      : 'vendor',
  filename  : 'vendor.js',
  // this assumes your vendor imports exist in the node_modules directory
  minChunks : ({ context }) => context && context.indexOf('node_modules') !== -1
})

// Modules configuration
const imagesModule = {
  test    : /\.(png|jpg|gif|svg)$/,
  use     : {
    loader  : 'file-loader',
    options : {
      name       : '[name].[ext]',
      outputPath : 'images/'
    }
  }
}

const transpileModule = { test: /\.jsx?$/, use: 'babel-loader'}
const lessModule = {
  test : /\.less$/,
  use  : extractLess.extract({
    use: ['css-loader', 'less-loader']
  })
}
const cssModule = { test: /\.css$/, use: ['style-loader', 'css-loader'] }

// Webpack
module.exports = (env) => ({
  entry  : './app/index.js',
  resolve: {
    modules: [
      path.resolve(__dirname, 'app'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  output : {
    path     : path.resolve(__dirname, 'build'),
    filename : 'app.js'
  },
  module: {
    rules: [
      transpileModule,
      imagesModule,
      lessModule,
      cssModule
    ]
  },
  plugins: [
    assetsHashGenerator,
    extractLess,
    vendorChunk,
    htmlInject
  ]
})
