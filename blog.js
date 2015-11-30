/* eslint-env node */
module.exports = {
    url: '//zusatzstoff.org',
    now: new Date(),
    title: 'Zusatzstoff.org',
    description: 'Create. Destroy. Repeat.',

    cover: 'static/background.jpg',

    navigation: [{
        link: '/',
        title: 'Home'
    }, {
        link: '/hardware',
        title: 'Hardware'
    }, {
        link: '/impressum',
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
