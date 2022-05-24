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
        "bootstrap-custom-base": ["./src/scss/bootstrap-custom-base.scss"],
        "bootstrap-custom": ["./src/scss/bootstrap-custom.scss"]
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    // Extracts CSS into separate files, one CSS file per JS file.
                    MiniCssExtractPlugin.loader,
                    // For relative "../" image urls to work in the scss style sheet, url must be set to false.
                    { loader: "css-loader", options: { url: false, sourceMap: true } },
                    { loader: "sass-loader", options: { sourceMap: true } }
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
                { from: "./../src/images", to: "images" }
            ]
        })
    ]
};