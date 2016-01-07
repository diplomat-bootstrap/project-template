var webpack = require("webpack");


module.exports = {
    context: __dirname + "/app",
    entry: "./application.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === "test"
        })
    ],
    resolve: {
        extensions: ["", ".js"]
    },
    devtool: "source-map",
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'baggage?[file].html&[file].css'
        }],
        loaders: [{
            test: /\.sass$/,
            loaders: ["style", "css", "sass?config=otherSassLoaderConfig"]
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: 'ngtemplate?relativeTo=' + __dirname + '/!raw'
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
