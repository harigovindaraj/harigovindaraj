const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [
        new HtmlWebPackPlugin({
            
            template: './src/app/restrictedDataMode.html',
                        
            filename: './restrictedDataMode.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'restrictedDataMode.js'
    }
}