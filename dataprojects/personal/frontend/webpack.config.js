const path = require('path');
const WebpackBundleTracker = require("webpack-bundle-tracker");

module.exports = {

    entry: path.resolve(__dirname, "src", "index.tsx"),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_modules)/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_modules)/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.svg$/i,
                type: "asset/inline"
            },
            {
                test: /\.(ico|png|jpe?g)$/,
                exclude: /node_modules/,
                type: "asset/resource"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        assetModuleFilename: "[hash][ext]",
        clean: true,

    },
    devServer: {
        port: 5000,
        hot: true,
        headers: { "Access-Control-Allow-Origin": '*' },
        liveReload: true,
        devMiddleware: {
            writeToDisk: true,
            publicPath: "http://localhost:5000/dist/",
        }
    },
    plugins:
        [
            new WebpackBundleTracker({
                filename: "./webpack-stats.json"
            }),
        ]



}