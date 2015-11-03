/* eslint-env node */
var baseUrl = 'zusatzstoff.surge.sh';

module.exports = {
    url: baseUrl,
    now: new Date(),
    title: 'Zusatzstoff.org',
    description: 'Create. Destroy. Repeat.',

    cover: 'static/background.jpg',

    navigation: [{
        link: baseUrl + '/',
        title: 'Home'
    }, {
        link: baseUrl + '/hardware',
        title: 'Hardware'
    }, {
        link: baseUrl + '/impressum',
        title: 'Impressum'
    }],

    contact: [{
        icon: 'fa-github',
        link: 'https://github.com/alexander-heimbuch'
    }, {
        icon: 'fa-twitter',
        link: 'https://twitter.com/zusatzstoff'
    }, {
        icon: 'fa-inbox',
        link: 'mailto:alex@zusatzstoff.org'
    }]
};
