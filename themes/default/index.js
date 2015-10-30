/* eslint-env node */
var path = require('path'),
    renderer = require('./engine')(path.resolve(__dirname, 'templates')),
    baseUrl = 'https://alexander-heimbuch.github.io/utterson-example';

var blog = {
    url: baseUrl,
    title: 'Utterson Example',
    description: 'Fillerama in GhostAhoy',
    now: new Date(),
    navigation: [{
        link: baseUrl + '/futurama',
        label: 'Futurama'
    }, {
        link: baseUrl + '/doctor-who',
        label: 'Doctor Who'
    }, {
        link: baseUrl + '/dexter',
        label: 'Dexter'
    }, {
        link: baseUrl + '/about',
        label: 'About'
    }],
    social: {
        github: 'https://github.com/alexander-heimbuch/utterson'
    }
};

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
