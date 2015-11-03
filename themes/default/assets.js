/* eslint-env node */
'use strict';

var path = require('path'),
    fs = require('fs-extra'),
    uglifycss = require('uglifycss'),
    uglifyjs = require('uglify-js');

module.exports = function (pipe, copy) {
    var assets = path.resolve(__dirname, 'assets'),

        css = uglifycss.processFiles([
            assets + '/css/screen.css',
            assets + '/css/layout.css',
            assets + '/css/casper.css',
            assets + '/css/zusatzstoff.css',
            assets + '/css/merriweather.css',
            assets + '/css/open-sans.css',
            'node_modules/font-awesome/css/font-awesome.css'
        ]),

        js = uglifyjs.minify([
            assets + '/js/jquery.min.js',
            assets + '/js/jquery.fitvids.js',
            assets + '/js/index.js'
        ]);

    fs.outputFileSync(assets + '/style.css', css);
    fs.outputFileSync(assets + '/script.js', js.code);

    copy([
        {src: assets + '/style.css', dest: 'assets/css/style.css'},
        {src: assets + '/script.js', dest: 'assets/js/script.js'},
        {src: assets + '/fonts', dest: 'assets/fonts'},
        {src: 'node_modules/font-awesome/fonts/fontawesome-webfont.eot', dest: 'assets/fonts/fontawesome-webfont.eot'},
        {src: 'node_modules/font-awesome/fonts/fontawesome-webfont.svg', dest: 'assets/fonts/fontawesome-webfont.svg'},
        {src: 'node_modules/font-awesome/fonts/fontawesome-webfont.ttf', dest: 'assets/fonts/fontawesome-webfont.ttf'},
        {src: 'node_modules/font-awesome/fonts/fontawesome-webfont.woff', dest: 'assets/fonts/fontawesome-webfont.woff'},
        {src: 'node_modules/font-awesome/fonts/fontawesome-webfont.woff2', dest: 'assets/fonts/fontawesome-webfont.woff2'},
        {src: 'node_modules/font-awesome/fonts/FontAwesome.otf', dest: 'assets/fonts/FontAwesome.otf'}
    ]);
};
