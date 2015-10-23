/* eslint-env node */
var path = require('path'),
    renderer = require('./engine')(path.resolve(__dirname, 'templates'));

var blog = {
    url: 'http://localhost:8080',
    title: 'Utterson Example',
    description: 'Fillerama in GhostAhoy',
    now: new Date(),
    navigation: [{
        link: this.url = '/futurama',
        label: 'Futurama'
    }, {
        link: this.url = '/doctor-who',
        label: 'Doctor Who'
    }, {
        link: this.url = '/about',
        label: 'About'
    }],
    social: {
        github: 'https://github.com/alexander-heimbuch/utterson'
    }
};

module.exports = {
    startpage: function (data, cb) {
        data.blog = blog;

        renderer('startpage', data, function (html) {
            cb('index.html', html);
        });
    },

    category: function (data, cb) {
        data.blog = blog;
        console.log(data);
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
