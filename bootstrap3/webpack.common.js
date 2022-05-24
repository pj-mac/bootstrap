const path = require("path");
const pkgRoot = require("./../package.json");
const pkgProject = require("./package.json");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const banner = `${pkgProject.description} v${pkgRoot.version}`;

module.exports = {
    entry: {
        "index": ["./src/js/index.js"],
        "bootstrap-custom-base": ["./src/less/bootstrap-custom-base.less"],
        "bootstrap-custom": ["./src/less/bootstrap-custom.less"]
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist")
    },
    externals: {
        // Using CDN for jQuery, so set it as "external" to prevent it from being included in the bundle.
        jquery: "jQuery"
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    // Extracts CSS into separate files, one CSS file per JS file.
                    MiniCssExtractPlugin.loader,
                    // For relative "../" image urls to work in the less style sheet, url must be set to false.
                    { loader: "css-loader", options: { url: false, sourceMap: true } },
                    { loader: "less-loader", options: { sourceMap: true } }
                ]
            }
        ]
    },
    plugins: [
        // Cleans dist folder
        new CleanWebpackPlugin(),
        // Adds custom banner message to top of generated CSS files.
        new webpack.BannerPlugin({ banner: banner }),
        // Copies fonts and images to dist folder.
        new CopyPlugin({
            patterns: [
                { from: "./src/fonts", to: "fonts" },
                { from: "./../src/images", to: "images" }
            ]
        })
    ]
};