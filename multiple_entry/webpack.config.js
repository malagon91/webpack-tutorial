const path = require('path');// modulo para poder obtener rutas
const ExtractTextPlugin = require('extract-text-webpack-plugin');// plugin para importar un css en html 
//y no escribir los estilos dentro del html
module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/script.js'),
        prices: path.resolve(__dirname,'src/js/prices.js'),
        contact: path.resolve(__dirname,'src/js/contact.js'),
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "js/[name].js"
    },
    module: {
        rules:[
            //Aqui van los loaders
            {
                //test: que tipo de archivo quiero reconocer
                //use: que loader se va a encargar del archivo
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
                 //'css-loader' entiende los css style-loader los imprime ord der a izq
            }// primer entiende el css y luego lo imprime ['style-loader','css-loader']
        ]
    },
    plugins: [
        //aqui van los plugins
        new ExtractTextPlugin('css/[name].css')
    ]
}