const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        main: [
            "core-js/stable",
            "regenerator-runtime/runtime",
            "./assets/js/index.js",
        ],
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "assets", "js", "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [/assets/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
};
