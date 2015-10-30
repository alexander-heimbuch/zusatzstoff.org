/* eslint-env node */
var baseUrl = 'https://alexander-heimbuch.github.io/utterson-example';

module.exports = {
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
