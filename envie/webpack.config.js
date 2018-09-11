const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
/*
Optimizar para produccion
extract text plugin .- irve para que los estilos no se carguen online y genere un archivo css
que se exporte al index.html


 */
module.exports = {
    entry: {
        envie: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: path.resolve(__dirname,'dist')+"/",
        chunkFilename: 'js/[id].[chunkhash].js',
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
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true, //comprime los archivos
                                modules: true, //los css files pueden importar archivos

                            }
                        }
                    ]                    
                })
               // use:['style-loader','css-loader']
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
    },
    plugins:[//generamos los archivos en css 
        new ExtractTextPlugin("css/[name].css")
    ]
}