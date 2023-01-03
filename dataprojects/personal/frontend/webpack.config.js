const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackBundleTracker = require("webpack-bundle-tracker");
const Webpack = require('webpack')

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
            // {
            //     test:/\.svg$/i,
            //     issuer: /\.[jt]sx?$/,
            //     use:["@svgr/webpack"],
            //     // type:"asset/inline"
            // },
            {
                test: /\.svg$/i,
                // issuer: /\.[jt]sx?$/,
                // use:["@svgr/webpack"],
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
        clean:true,

    },
    devServer: {
        // open: true,
        port: 5000,
        hot: true,
        headers:{"Access-Control-Allow-Origin":'*'},
        // historyApiFallback:true,
        liveReload:true,
        devMiddleware: {
            writeToDisk:true,
            publicPath: "http://localhost:5000/dist/",
            // serverSideRender: true
        }
    },
    plugins:
        [
            // new HtmlWebpackPlugin({
            //     template: path.resolve("public","index.html")
            // }),
            new WebpackBundleTracker({
                filename: "./webpack-stats.json"
            }),
            // new Webpack.optimize.LimitChunkCountPlugin({
            //     maxChunks:1
            // }) 
        ]



}