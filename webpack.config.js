const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    devServer: {
        port: 9000,
        progress: true
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.ts|tsx$/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]"
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],

};

