/* eslint-env node */
'use strict';

var path = require('path'),
    blog = require('../../blog'),
    copy = require('./lib/redmond'),
    renderer = require('./lib/renderer')(path.resolve(__dirname, 'templates')),
    filter = require('./lib/filter'),
    authors = require('./lib/authors');

module.exports = {
    startpage: require('./startpage')(blog, renderer),

    category: function (data, cb) {
        data = copy(data, blog);

        authors(data.posts, function (resolved) {
            data.posts = filter(resolved, 'redirect');

            renderer('index', data, function (html) {
                cb('index.html', html);
            });
        });
    },

    page: function (data, cb) {
        renderer('page', copy(data, blog), function (html) {
            cb(data.name + '.html', html);
        });
    },

    post: function (data, cb) {
        data = copy(data, blog);

        authors(data, function (resolved) {
            data = resolved;
            renderer('post', data, function (html) {
                cb(data.name + '.html', html);
            });
        });
    },

    custom: require('./assets')
};
