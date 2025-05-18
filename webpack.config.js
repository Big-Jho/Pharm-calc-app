const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { options } = require("cssesc");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // folder to serve static files from
    },
    compress: true, // enable gzip compression
    port: 3000, // port number to run the server
    open: true, // open default browser after server starts
    hot: true, // enable Hot Module Replacement
    allowedHosts: "all", // allow all hosts to access the dev server
    client: {
      webSocketURL: "ws://0.0.0.0:3000/ws", // websocket URL for live reload
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset", // automatically chooses between inline and resource based on size
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb limit for inline base64, larger files emitted as separate files
          },
        },
      },

      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "fonts/",
            },
          },
        ],
      },
    ],
  },

  output: {
    assetModuleFilename: "images/[hash][ext][query]", // optional: customize output folder and filename
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "style.css",
    }),
    new HtmlWebpackPlugin({
      title: "Pharmaceutical Calculator - Welcome",
      filename: "index.html",
      inject: "body",
      scriptLoading: "defer",
      template: "./src/html/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Dose Calculator",
      filename: "dose-calculator.html",
      inject: "body",
      scriptLoading: "defer",
      template: "./src/html/dose-calculator.html",
    }),
    new HtmlWebpackPlugin({
      title: "Pharmacokinetics Calculator",
      filename: "kinetics-calculator.html",
      inject: "body",
      scriptLoading: "defer",
      template: "./src/html/kinetics-calculator.html",
    }),
  ],
};
