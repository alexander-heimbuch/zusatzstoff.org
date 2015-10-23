var utterson = require('../utterson-generator');

var meta = {
        'futurama/': {
            type: 'posts',
            category: 'Futurama',
            category_description: 'Welcome at Planet Express',
            cover: 'static/futurama.png'
        }
    };

utterson({
    content: meta
});
