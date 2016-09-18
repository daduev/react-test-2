/**
 * Created by Adam on 18.09.2016.
 */
var config = {
    entry: "./src/main.js",
    output: {
        path: "./public/build",
        publicPath: "build",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/, /public/],
            loader: "babel",
            query:
            {
                presets:["es2015", "react"]
            }
        },
        {
            test: /\.jsx$/,
            exclude: [/node_modules/, /public/],
            loader: "babel",
            query:
            {
                presets:["es2015", "react"]
            }
        }]
    },

};

module.exports = config;
