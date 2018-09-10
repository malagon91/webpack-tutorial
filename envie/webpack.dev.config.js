const path = require('path');
module.exports = {
    entry: {
        envie: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer:{
        port: 9000
    },
    module: {
        rules: [
            {// cargo archivos js
                test: /\.js|jsx$/,
                exclude:/(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-2']
                    }
                }
            },
            {// soporte css
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {//imagenes
                test: /\.jpg|png|gif|svg$/,
                use:{
                    loader: 'url-loader',
                    options:{// cuando la imagen pese mas de 10k lo va a enviar con el file loader
                        limit:1000000,
                        fallback:'file-loader',
                        name:'images/[name].[hash].[ext]'
                    }
                }
            }
        ]
    }
}