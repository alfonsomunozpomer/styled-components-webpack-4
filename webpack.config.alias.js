const path = require(`path`)

const commonPublicPath = `/dist/`

module.exports = {
  entry: {
    myComponentDemo: `./html/MyComponentDemo.js`,
    anotherComponentDemo: `./html/AnotherComponentDemo.js`
  },

  output: {
    library: `[name]`,
    filename: `[name].bundle.js`,
    publicPath: commonPublicPath
  },

  resolve: {
    alias: {
      "styled-components": path.resolve('./node_modules/styled-components')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules\//,
        use: `babel-loader`
      }
    ]
  },

  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, `html`),
    publicPath: commonPublicPath
  }
}
