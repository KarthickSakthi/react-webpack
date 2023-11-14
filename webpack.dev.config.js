var path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    entry: path.resolve(__dirname, "src/index.js"),
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module:{
      rules:[
        {
        test: /\.(js|jsx)$/,
        exclude:/node_modules/,
        use:[ "babel-loader"]
      },
      {
        test: /\.(s*)css$/,
        use:  [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                // importLoaders: 1,
                modules: true,
              },
            },
          ]
      }
    ]
    },
    resolve:{
        extensions:[".js",".jsx"]
    },
    mode:"development",
    plugins:[
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "src/index.html")})
    ],
    devServer:{
        port:3001
    }
}