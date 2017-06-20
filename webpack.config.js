// This library allows us to combine paths easily
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/src",
    entry: './js/client.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true, importLoaders: 1, sourceMap: true } },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                sourceMap: true,
                                plugins: () => {
                                    return [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        },
                        // { loader: 'resolve-url-loader' },
                        { loader: 'sass-loader', options: { sourceMap: true } }
                    ]
                })
            },
            {
                test: /\.pdf$/,
                loader: 'file-loader?name=[path]/[name].[ext]'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/,
                loader: 'url-loader?limit=10000&name=[path]/[name].[ext]'
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 8080,
        overlay: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new ExtractTextPlugin({
            filename: 'assets/css/style.css',
            allChunks: true
        })
    ]
};
