const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	optimization: {
		minimize: false,
	},
	devtool: false,
	target: "node",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		library: {
			type: "commonjs-module",
		},
		clean: true,
		chunkFormat: "module",
	},

	resolve: {
		extensions: [".ts", ".js"],
	},
	externals: [nodeExternals()],

	module: {
		rules: [
			{
				test: /\.ts/,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
		],
	},
};
