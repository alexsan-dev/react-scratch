const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 8080,
		publicPath: 'http://localhost:8080/dist/',
		hotOnly: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'react-hot-loader/webpack',
				include: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devtool: 'source-map',
})
