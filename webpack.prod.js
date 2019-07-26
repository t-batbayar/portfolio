const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contentHash].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.(c|s(a|c))ss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader, // 3. Extract css into files
					{
						loader: "css-loader", // 2. Turns css into commonjs
						options: {
							sourceMap: true,
							modules: true,
							localIdentName: "[local]___[hash:base64:5]"
						}
					},
					{
						loader: 'sass-loader', // 1. Turns sass into css
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(c|s(a|c))ss$/,
				include: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader, // 3. Extract css into files
					{
						loader: "css-loader", // 2. Turns css into commonjs
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader', // 1. Turns sass into css
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin()
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: "./src/favicon.ico",
			template: "./src/index.html",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contentHash].css"
		}),
		new CleanWebpackPlugin()
	]
});