const path = require('path');// modulo para poder obtener rutas
const ExtractTextPlugin = require('extract-text-webpack-plugin');// plugin para importar un css en html 
//y no escribir los estilos dentro del html
module.exports = {
    entry: path.resolve(__dirname,'src/js/script.js'),
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
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
            {
                //test: que tipo de archivo quiero reconocer
                //use: que loader se va a encargar del archivo
                test: /\.js/,// pueden ir todos los rules que necesites 
                use: {
                    loader: 'babel-loader',// si un loader necesita configs deben ir en su etiqueta de options
                    options:{
                        presets:['es2015','react']// despues de agregar esto puedo usar import 
                    }//presets:['es2015','react'] agrege el preset de react para que babel pueda interpretar jsx
                }
                 //'css-loader' entiende los css style-loader los imprime ord der a izq
            },// primer entiende el css y luego lo imprime ['style-loader','css-loader']
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                //test: que tipo de archivo quiero reconocer
                //use: que loader se va a encargar del archivo
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
                 //'css-loader' entiende los css style-loader los imprime ord der a izq
            },// primer entiende el css y luego lo imprime ['style-loader','css-loader']
            {
                //install sass-loader
               // agregamos los 2 loaders para que interprete css y sass 
               //sass tiene que ser interpretado en el sistema con node-sass
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader","sass-loader"]
                })
                 //'css-loader' entiende los css style-loader los imprime ord der a izq
            },// primer entiende el css y luego lo imprime ['style-loader','css-loader']
            {
                //install sass-loader
               // agregamos los 2 loaders para que interprete css y sass 
               // instalamos npm i stylus stylus-loader -D
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader",{
                        loader: "stylus-loader",//
                        //le agrego  opciones a stylues para poder extender sus funciones 
                        options:{
                            use:[
                                require('nib'),// hace compatibles funciones nuevas en nav viejos 
                                require('rupture'), // mejora la forma de hacer media queries
                            ],///~ es un alias para node modules
                            import:[// esta es la direccion de donde esta pero necesitamos inst en npm
                                '~nib/lib/nib/index.styl',
                                '~rupture/rupture/index.styl'
                            ]
                            // +below(768px) rupture nos agrego la funcion below para
                            // hacer mediaqueries mas facil con la funcion below
                        }
                    }]
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