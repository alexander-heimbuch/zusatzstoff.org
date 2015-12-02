var utterson = require('utterson');

var meta = {
    'hardware/': {
        type: 'posts',
        category: 'Hardware'
    },
    'ikeahacks/': {
        type: 'posts',
        category: 'Ikeahacks'
    }
};

utterson({
    content: meta
});
