// const webpack = require("webpack");
// const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = {
//   mode: "development",
//   entry: '../todolist/src/todo.ts',
//   module: {
//     rules:[
//         {
//             test:/\.ts$/,
//             use:'ts-loader',
//             exclude:/node_modules/
//         }
//     ]
//   },
//   output: {
//     path: path.resolve(__dirname, "../dist"),
//     filename: "webpack-output.js",
//   },
//   plugins:[new HtmlWebpackPlugin()]

// }

const webpack = require("webpack");
const path = require("path");

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
    path: path.resolve(__dirname, "../todolist/src/dist"),
  }
}