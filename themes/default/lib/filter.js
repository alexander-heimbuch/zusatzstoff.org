'use strict';

var _ = require('lodash');

var rules = {
    'redirect': function (data) {
        if (data.redirect !== undefined) {
            return false;
        }

        return true;
    }
};

module.exports = function (data, usedFilters) {
    if (Object.prototype.toString.call(usedFilters) !== '[object Array]') {
        usedFilters = [usedFilters];
    }

    usedFilters.forEach(function (specificFilter) {
        data = _.filter(data, rules[specificFilter]);
    });

    return data;
};
