var webpack = require("webpack");

module.exports = {
    entry: "./app/application.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".js"]
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.sass$/,
            loaders: ["style", "css", "sass?config=otherSassLoaderConfig"]
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: "raw"
        }, {
            test: /\.styl$/,
            loaders: ["style", "css", "stylus"]
        }]
    },
    otherSassLoaderConfig: {
        indentedSyntax: true
    },
    devServer: {
        port: 9000,
        hot: true
    }
};
