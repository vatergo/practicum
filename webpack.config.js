const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    static: "./public",
    compress: true,
    port: 9000,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|ttf)$/,
        use: "url-loader?name=[name].[ext]",
      },
    ],
  },
};
