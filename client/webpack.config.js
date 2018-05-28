const path = require('path')

module.exports = {
  entry: './main.js',
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  externals: {
    domino: 'domino'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          babelrc: false,
          presets: [
            ["es2015", { modules: false }],
            "stage-2",
            "import-export",
          ],
          plugins: [
            ["transform-es2015-modules-commonjs"]
          ]
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    publicPath: './public',
    path: path.resolve(__dirname, 'dist')
  }
}

if (process.env.WEBPACK_SERVE) {
  module.exports.serve = require('tram-dev-server-config')
}
