/* eslint-env node */
'use strict';

var path = require('path'),
    blog = require('../../blog'),
    renderer = require('./lib/renderer')(path.resolve(__dirname, 'templates')),
    authors = require('./lib/authors');

module.exports = {
    startpage: require('./startpage')(blog, renderer),

    category: function (data, cb) {
        data.blog = blog;

        authors(data.posts, function (resolved) {
            data.posts = resolved;
            renderer('index', data, function (html) {
                cb('index.html', html);
            });
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
        authors(data, function (resolved) {
            data = resolved;
            renderer('post', data, function (html) {
                cb(data.name + '.html', html);
            });
        });
    },

    custom: require('./assets')
};
