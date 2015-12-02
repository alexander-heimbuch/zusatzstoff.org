/* eslint-env node */
'use strict';

var _ = require('lodash');

module.exports = function () {
    var params = Array.prototype.slice.call(arguments),
        original = params.shift(),
        result;

    result = _.cloneDeep(original);

    params.forEach(function (extension) {
        result = _.assign(result, extension);
    });

    return result;
};
