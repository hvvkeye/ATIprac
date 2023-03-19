const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: '../todolist/src/todo.ts',
  module: {
    rules:[
        {
            test:/\.ts$/,
            use:'ts-loader',
            exclude:/node_modules/
        }
    ]
  },
  output: {
    filename: "webpack-output.js",
    path : path.resolve(__dirname,'../todolist/')
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'../todolist/index.html',
      inject:'body'
      
    })  
  ]
}
