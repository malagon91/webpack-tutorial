const path = require('path');// modulo para poder obtener rutas

module.exports = {
    entry: path.resolve(__dirname,'script.js'),
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    module: {
        rules:[
            //Aqui van los loaders
            {
                //test: que tipo de archivo quiero reconocer
                //use: que loader se va a encargar del archivo
                test: /\.css$/,
                use: ['style-loader','css-loader'], //'css-loader' entiende los css style-loader los imprime ord der a izq
            }// primer entiende el css y luego lo imprime
        ]
    }
}