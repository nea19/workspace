// 简书
// http://www.jianshu.com/p/42e11515c10f
// 启动
// npm run server


// module.exports = {
//     entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
//     output: {
//       path: __dirname + "/public",//打包后的文件存放的地方
//       filename: "bundle.js"//打包后输出文件的文件名
//     }
//   }

// 构建本地服务
// npm install --save-dev webpack-dev-server
// 配置devServer后
// module.exports = {
//     devtool: 'eval-source-map',
  
//     entry:  __dirname + "/app/main.js",
//     output: {
//       path: __dirname + "/public",
//       filename: "bundle.js"
//     },
  
//     devServer: {
//       contentBase: "./public",//本地服务器所加载的页面所在的目录
//       historyApiFallback: true,//不跳转
//       inline: true//实时刷新
//     } 
//   }



  // 添加baable后
  // npm一次性安装多个依赖模块，模块之间用空格隔开
  //npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
//   module.exports = {
//     entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
//     output: {
//         path: __dirname + "/public",//打包后的文件存放的地方
//         filename: "bundle.js"//打包后输出文件的文件名
//     },
//     devtool: 'eval-source-map',
//     devServer: {
//         contentBase: "./public",//本地服务器所加载的页面所在的目录
//         historyApiFallback: true,//不跳转
//         inline: true//实时刷新
//     },
//     module: {
//         rules: [
//             {
//                 test: /(\.jsx|\.js)$/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: [
//                             "env", "react"
//                         ]
//                     }
//                 },
//                 exclude: /node_modules/
//             }
//         ]
//     }
// };

// 安装react
// npm install --save react react-dom



// 处理css
// npm install --save-dev style-loader css-loader
module.exports = {
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
};