const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const babelOptions = {
//     "presets": [
//       "react",
//       [
//         "es2015",
//         {
//           "modules": false
//         }
//       ],
//       "es2016"
//     ]
//   };
  

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "webuild")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                    loader:'babel-loader',
                    // options: babelOptions
                }, 
                // {
                //     loader: 'ts-loader'
                // }
            ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['css-loader']
            },
            {
                test: /\.(ico|svg)$/,
                exclude: /node_modules/,
                use: ['babel-loader']

            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'public','index.html')
        })

    ],
    externals:{
        'react':'React',
        'react-dom':'ReactDom'
    }
};