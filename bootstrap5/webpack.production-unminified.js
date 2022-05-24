const path = require("path");
const pkgRoot = require("./../package.json");
const pkgProject = require("./package.json");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const banner = `${pkgProject.description} v${pkgRoot.version}`;

module.exports = {
    mode: "development",
    entry: {
        "bootstrap-custom-base": ["./src/scss/bootstrap-custom-base.scss"],
        "bootstrap-custom": ["./src/scss/bootstrap-custom.scss"]
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
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
    optimization: {
        minimize: false
    },
    plugins: [
        // Extracts CSS into separate files, one CSS file per JS file.
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        // Adds custom banner message to top of generated CSS files.
        new webpack.BannerPlugin({ banner: banner })
    ]
};