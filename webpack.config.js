const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            }
        },{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      devServer: {
        historyApiFallback: true,
      },
    plugins:[new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')})],
};
