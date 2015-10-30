var utterson = require('utterson');

var meta = {
        'futurama/': {
            type: 'posts',
            category: 'Futurama',
            category_description: 'Sweet zombie Jesus!',
            cover: 'static/futurama.png'
        },
        'doctor-who/': {
            type: 'posts',
            category: 'Doctor Who',
            category_description: 'Pretend It\'s a Plan.',
            cover: 'static/doctor-who.png',
            order: 'ASC'
        },
        'dexter/': {
            type: 'posts',
            category: 'Dexter',
            category_description: 'I have standards. ',
            cover: 'static/dexter.jpg',
            indexed: true
        }
    };

utterson({
    content: meta
});
