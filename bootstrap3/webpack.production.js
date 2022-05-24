const commonConfig = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pkgRoot = require("../package.json");

module.exports = merge(commonConfig, {
    mode: "production",
    devtool: "source-map",
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        // Extracts CSS into separate files, one CSS file per JS file.
        new MiniCssExtractPlugin({
            filename: "css/[name].min.css"
        }),
        // Creates HTML file.
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: false,
            hash: true,
            minify: false,
            scriptLoading: "blocking",
            ENV: "production",
            VERSION: pkgRoot.version,
            //ROOT: path.join(__dirname, "/../src/html"),
            SUB: "./html"
        })
    ]
});