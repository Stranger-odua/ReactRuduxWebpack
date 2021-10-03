const path = require("path"); // импорт библиотеки path из nodejs
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
  mode: "development", // указывает вебпаку, что не нужно сжимать выходные файлы
  entry: './src/index.js', // точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), // место куда вебпак будет складывать выходные файлы
    // - папка dist
    filename: "[name]_bundle.[hash].js", // регулярка для того, чтобы вебпак создавал бандлы с
    //  уникальными именами, это нужно как раз таки чтобы бандлы с одинаковыми именами  не
    //  перезатирали друг друга
    // clean: true, // очистка папки dist перед новой сборкой
  },

  devServer: {
    port: 3000
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ],


  module: {
    rules: [
      {
        test: /\.(css|less)$/, // обработка лоадеров стилей
        // test: /\.less$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader'}
        ] // лоадеры, которые будут
        // использоваться. Их порядок использования идет справа налево, поэтому нужно это учитывать
      },
      {
        test: /\.(jpg|jpeg|png|svg)/, // импорт файлов
        use: ['file-loader']
      },
      {
        test: /\.m?js$/, //
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }

}


















































