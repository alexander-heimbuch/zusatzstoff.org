/* eslint-env node */
'use strict';

var dust = require('dustjs-linkedin'),
    helpers = require('common-dustjs-helpers'),
    fs = require('fs-extra'),
    path = require('path'),
    glob = require('glob');

var  buildCache = function (templateDir) {
        // Create cache for dust
        glob.sync(templateDir + '/**/*.dust').forEach(function (templateFile) {
            var templateName = templateFile.replace(templateDir + path.sep, '').replace('.dust', '');

            dust.loadSource(
                dust.compile(fs.readFileSync(templateFile, 'utf8'), templateName)
            );
        });
    },

    registerPlugins = function () {
        new helpers.CommonDustjsHelpers().export_helpers_to(dust);
        require('dustjs-helpers');
        require('dustjs-helper-formatdate');
        require('dustjs-helper-maxlength/maxlength');

        dust.isDebug = true;
        dust.debugLevel = 'DEBUG';
    };

module.exports = function (templateDir) {

    registerPlugins();

    // Load the helpers
    buildCache(templateDir);

    return function (template, templateData, done) {
        dust.render(template, templateData, function (err, html) {
            if (err !== null) {
                return done('');
            }

            done(html);
        });
    };

};
