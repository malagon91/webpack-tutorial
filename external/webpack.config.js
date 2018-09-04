const path = require('path');// modulo para poder obtener rutas

module.exports = {
    entry: path.resolve(__dirname,'script.js'),
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    }
}