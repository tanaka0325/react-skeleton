import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

module.exports = [
  {
    name: 'js',
    entry: path.join(__dirname, 'src', 'js', 'index.js'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
    },
    target: 'web',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },
  {
    name: 'html',
    entry: path.join(__dirname, 'src', 'index.html'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'index.html',
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract('raw-loader')
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('index.html'),
    ],
  },
  {
    name: 'style',
    entry: path.join(__dirname, 'src', 'sass', 'style.sass'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'style.css',
    },
    module: {
      loaders: [
        {
          test: /\.sass$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
        },
        {
          test: /\.(jpg|png)$/,
          exclude: /node_modules/,
          loader: 'url-loader',
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
    ],
  },
]

// import path from 'path'
// 
// module.exports = [
//   {
//     entry: path.join(__dirname, 'src', 'index.js'),
//     output: {
//       path: path.join('dest'),
//       filename: 'bundle.js',
//     },
//     target: 'web',
//     module: {
//       loaders: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           loader: 'babel-loader',
//         },
//       ],
//     },
//     resolve: {
//       extensions: ['', '.js', '.jsx'],
//     },
//   },
// ]
