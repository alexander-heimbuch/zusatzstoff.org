/* eslint-env node */
'use strict';

var path = require('path'),
    blog = require('../../blog'),
    renderer = require('./engine')(path.resolve(__dirname, 'templates'));

module.exports = {
    startpage: require('./startpage')(blog, renderer),

    category: function (data, cb) {
        data.blog = blog;

        renderer('category', data, function (html) {
            cb('index.html', html);
        });
    },

    page: function (data, cb) {
        data.blog = blog;
        renderer('page', data, function (html) {
            cb(data.name + '.html', html);
        });
    },

    post: function (data, cb) {
        data.blog = blog;
        renderer('post', data, function (html) {
            cb(data.name + '.html', html);
        });
    },

    custom: function (pipe, cb) {
        cb({src: path.resolve(__dirname, 'assets'), dest: 'assets'});
    }
};
