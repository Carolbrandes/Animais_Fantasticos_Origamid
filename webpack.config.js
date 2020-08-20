const path = require('path');

module.exports = {
    // antes aqui passamos os pluggins que queremos utilizar, o babel/pollyfil ja vai passar automaticamente o babel-core
    entry: ['@babel/polyfill', 'whatwg-fetch',  './js/main.js'],
    output:{
        path: path.resolve(__dirname, './'),
        filename: 'index.js'
    }
}