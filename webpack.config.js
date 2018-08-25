const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          "html-loader",
          "pug-html-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.pug",
      filename: "./index.html",
      inject: false
    })
  ]
};
