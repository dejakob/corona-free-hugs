const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    create: path.join(__dirname, "./src/create.js"),
    hug: path.join(__dirname, "./src/hug.js")
  },
  output: {
    path: path.join(__dirname, "./lib")
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader"
      }
    ]
  }
};
