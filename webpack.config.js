const path = require("path");

module.exports = {
  mode: "development", 
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, "./loaders/myLoader.js"),
          options: {
            name: "JavaScript",
          },
        },
      },
    ],
  },
};
