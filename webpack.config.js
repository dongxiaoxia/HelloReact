var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactROM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

config = {
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'src/main.js'),

    ],
    resolve: {
        alias: {
            'react': pathToReact,
            'react-dom':pathToReactROM
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query:
            {
                presets:['react']
            }
        },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            }],
        noParse: [pathToReact,pathToReactROM]
    }
};

module.exports = config;