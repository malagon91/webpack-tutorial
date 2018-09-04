const path = require('path');// modulo para poder obtener rutas
const ExtractTextPlugin = require('extract-text-webpack-plugin');// plugin para importar un css en html 
//y no escribir los estilos dentro del html
module.exports = {
    entry: path.resolve(__dirname,'src/js/script.js'),
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        publicPath:'./dist/'
    },//publicPath en donde va a buscar los archivos cuando los quieras importar
    module: {
        rules:[
            //Aqui van los loaders
            {// loader para imagenes
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader:'url-loader',
                    options: {
                        limit:1000000
                    }
                }
            },
             {// loader para videos debemos instalar file loader para que se puedan exportar los videos
                test: /\.(mp4|webm)$/,
                use: {
                    loader:'url-loader',
                    options: {
                        limit:1000000,//la opcion name coloca los archivos que pesen mas en la ruta que 
                        name:'videos/[name].[hash].[ext]'//menciona y agregamos [name] para que conserven su nombre
                    }//agregamos el hash de cada compilacion
                }
            },
            {
                //test: que tipo de archivo quiero reconocer
                //use: que loader se va a encargar del archivo
                test: /\.js/,// pueden ir todos los rules que necesites 
                use: {
                    loader: 'babel-loader',// si un loader necesita configs deben ir en su etiqueta de options
                    options:{
                        presets:['es2015']// despues de agregar esto puedo usar import 
                    }
                }
                 //'css-loader' entiende los css style-loader los imprime ord der a izq
            },// primer entiende el css y luego lo imprime ['style-loader','css-loader']
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
        new ExtractTextPlugin('css/styles.css')
    ]
}