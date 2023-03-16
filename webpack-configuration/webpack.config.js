const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: '../todolist/src/todo.js',
  output: {
    filename: "webpack-output.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }
}