/* eslint-env node */
var _ = require('lodash'),
    authors = require('./lib/authors'),
    filter = require('./lib/filter'),
    copy = require('./lib/redmond');

var postsPerPage = 5,
    pagination = [];

module.exports = function (blog, renderer) {
    'use strict';

    var pager = function (page) {
            var fileName = 'index';

            if (page > 0) {
                fileName += '-' + page;
            }

            fileName += '.html';
            pagination.push(fileName);

            return fileName;
        },

        template = function (data, page, file, cb) {
            data.posts = data.posts.slice(page * postsPerPage, (page + 1) * postsPerPage);
            data.posts = filter(data.posts, 'redirect');

            data.pagination = {
                'prev': pagination[page - 1],
                'next': pagination[page + 1]
            };

            authors(data.posts, function (resolved) {
                renderer('index', data, function (html) {
                    cb({dest: file, 'content': html});
                });
            });
        };

    return function (data, cb) {
        var pages = Array.apply(null, Array(Math.ceil(data.posts.length / postsPerPage)));

        data = copy(data, blog);

        pages.forEach(function (element, index) {
            pages[index] = pager(index);
        });

        pages.forEach(function (fileName, index) {
            template(_.clone(data), index, fileName, function (result) {
                pages[index] = result;
                if (index === pages.length - 1) {
                    cb(pages);
                }
            });
        });
    };
};
