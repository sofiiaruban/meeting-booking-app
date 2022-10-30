const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
       main: './src/index.js',
       createEvent : './src/create-event.js',
    },
        
    
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
                ],
            },
        ],
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks : ['main'], }),
        new HtmlWebpackPlugin({
            filename: 'create-event.html',
            template: './src/create-event.html',
            chunks : ['createEvent', 'style.css'],
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
    ]
};
