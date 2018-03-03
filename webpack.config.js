var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './app/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                }
            },
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.runtime.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
      }
}