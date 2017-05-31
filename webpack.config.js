// This library allows us to combine paths easily
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: path.resolve(__dirname, 'src','index.jsx'),
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
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
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
            }
        ]
    },
    devServer: {
        contentBase: './src',
        publicPath: '/dist'
    }
};
