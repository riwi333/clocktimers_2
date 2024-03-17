const path = require('path');
 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    mode: 'development',
    target: 'web',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/i,
                use: [ 'ts-loader' ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ],
            },
			{
				test: /\.(svg)$/i,
				type: 'asset/resource',
			},
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
			favicon: 
				path.resolve(__dirname, "assets/bootstrap-icons", "clock.svg"),
        }),
    ],
	// devtool: 'eval-source-map',
    devServer: {
        static: path.resolve(__dirname, "build"),
    }
}