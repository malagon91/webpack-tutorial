const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
/*
Optimizar para produccion
extract text plugin .- irve para que los estilos no se carguen online y genere un archivo css
que se exporte al index.html

"build:local": "webpack --env.NODE_ENV=local", la forma de pasar var e entorno 
install clean-webpack-plugin 
new cleanWebpackPlugin(['carpetas a borrar'],{root: __dirname (directorio donde buscarlas)})
para borrar folders
    "build:prod": "webpack -p --env.NODE_ENV=production"
se agrega -p para poder minificar los archivos js
 */
//extrajimos los plugins como var para poder obtener var de entorno


// lo tenemos que cambiar a una funcion para que pueda recibir el param de env la func retorna el objeto
module.exports = (env) => {
    const plugins = [
        new ExtractTextPlugin("css/[name].[hash].css")
    ]
    if (env.NODE_ENV === 'production') {
        plugins.push(
            new cleanWebpackPlugin(['dist'], {
                root: __dirname
            })
        )
    }

    return {
        entry: {
            envie: path.resolve(__dirname, 'src/index.js'),
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].[hash].js',
            publicPath: path.resolve(__dirname, 'dist') + "/",
            chunkFilename: 'js/[id].[chunkhash].js',
        },
        devServer: {
            port: 9000
        },
        module: {
            rules: [{ // cargo archivos js
                    test: /\.js|jsx$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-2']
                        }
                    }
                },
                { // soporte css
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: true, //comprime los archivos
                                //modules: true, //los css files pueden importar archivos

                            }
                        }]
                    })
                    // use:['style-loader','css-loader']
                },
                { //imagenes
                    test: /\.jpg|png|gif|svg$/,
                    use: {
                        loader: 'url-loader',
                        options: { // cuando la imagen pese mas de 10k lo va a enviar con el file loader
                            limit: 10000,
                            fallback: 'file-loader',
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                }
            ]
        },
        plugins
    }
}