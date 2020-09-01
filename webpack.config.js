const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
let pathsToClean = ["dist"];

module.exports = {
  entry: {
    app: [
      "./src/index.js",
      "./src/smoth.js",
      "babel-polyfill",
      "./src/typekit.js",
      "./src/icons.js",
      "./src/bootstrap.js",
      "./src/contact.js",
      './src/localize.js',
      './src/youtube_player.js',
      './src/notify.min.js'
    ]
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify: true,
      cache: true
    }),
    new CleanWebpackPlugin(pathsToClean),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "async"
    }),
    new CopyWebpackPlugin([
      {
        from: "src/img",
        to: "img"
      },
      {
        from: "src/music",
        to: "music"
      },
      {
        from: "src/php",
        to: "php"
      }
    ]),
    new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
      cache: true,
      deleteOriginalAssets: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.mp3$/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader"
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader"
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [require("autoprefixer")];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?name=img/[name].[ext]",
          "image-webpack-loader?bypassOnDebug"
        ]
      }
    ]
  }
};
