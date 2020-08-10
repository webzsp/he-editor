/**
 * @author zsp
 * @date 2020/7/7 23:45
 * @description
 */
var path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'config'),
        compress: true,
        port: 9000,

    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            '@':path.resolve('src')
        }
    },
    externals:{
        react:{
            root:"React",
            commonjs: 'react',
            commonjs2: 'react',
             amd: 'react',
        },
        'react-dom':{
            root:"ReactDom",
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'reactDom',
        },
        'antd':{
            root:'antd',
            commonjs: 'antd',
            commonjs2: 'antd',
            amd: 'antd',
        }
    },
    watch: true,
    watchOptions: {
        ignored: '/node_modules/'
    },
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'a-editor.js',
        library: 'zsp',
        libraryTarget: "umd",
        // libraryExport: 'default',
    },
    module: {
        rules: [
            {
                test: /\.(jsx|ts|tsx)$/,
                use:'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        modules: {
                            localIdentName:'[name]__[local]___[hash:base64:5]'
                        },
                    }
                }, {
                    loader: "less-loader", // compiles Less to CSS

                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                }]
            },
            {
                // 图片解析
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[path][name].[hash:4].[ext]',
                        },
                    },
                ],
            },
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
    ]
};
