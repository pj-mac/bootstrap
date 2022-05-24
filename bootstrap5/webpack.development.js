const commonConfig = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pkgRoot = require("../package.json");

// Route will show where files are served.
// http://localhost:8080/webpack-dev-server

// Route will invalidate the current compilation of the bundle and recompile it.
// http://localhost:8080/invalidate

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: "inline-source-map",
    watchOptions: {
        ignored: ["node_modules", "dist"]
    },
    devServer: {
        liveReload: true,
        hot: false,
        open: true
        //port: "3001"
    },
    plugins: [
        // Extracts CSS into separate files, one CSS file per JS file.
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        // Creates HTML file.
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: false,
            hash: false,
            minify: false,
            scriptLoading: "blocking",
            ENV: "development",
            VERSION: pkgRoot.version,
            //ROOT: path.join(__dirname, "/../src/html"),
            SUB: "./html"
        })
    ]
});