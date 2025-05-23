const path = require("path");

module.exports = {
  entry: "./src/components/Faceplate.jsx",
  output: {
    path: path.resolve(__dirname, "bundled"),
    filename: "Faceplate.js",
    library: "Component",
    libraryTarget: "window"
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
