const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const yargs = require("yargs")

const optimizeMinimize = yargs.alias('p', 'optimize-minimize').argv.optimizeMinimize

module.exports = {
    entry: ['./src/app'],
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ]
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-1']
                }
            },
            {
                test: /\.(jpe?g|png)$/,
                loader: "responsive-loader"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[hash].js'
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/assets',
            to: 'assets'
        }]),
        new HtmlWebpackPlugin({
            template: "./src/app.html",
            minify: {
                minifyJS: optimizeMinimize,
                minifyCSS: optimizeMinimize,
                removeAttributeQuotes: false,
                collapseWhitespace: optimizeMinimize,
                html5: true
            }
        }),
        new FaviconsWebpackPlugin('./src/myapp/logo-2048x2048.png'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    devtool: 'source-map',
    devServer: {
        inline: true,
        historyApiFallback: {
            verbose: true,
            disableDotRule: true
        }
    }
}
