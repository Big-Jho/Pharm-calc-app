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
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    allowedHosts: "all",
    client: {
      webSocketURL: "ws://0.0.0.0:3000/ws",
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

      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },

      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
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
    new HtmlWebpackPlugin({
      title: "Anthropometry Calculator",
      filename: "anthropometric-calculator.html",
      inject: "body",
      scriptLoading: "defer",
      template: "./src/html/anthropometric-calculator.html",
    }),
    new HtmlWebpackPlugin({
      title: "PharmCalc - Ask AI",
      filename: "ask-ai.html",
      inject: "body",
      scriptLoading: "defer",
      template: "./src/html/ask-ai.html",
    }),
  ],
};
