/*eslint-env: node*/

var request = require('request'),
    cheerio = require('cheerio'),
    authors = {},
    twitterBase = 'https://twitter.com/';

var requestAuthorInformation = function (name, done) {
        if (name === undefined || name.indexOf('@') === -1) {
            return done(undefined);
        }

        if (authors[name] !== undefined) {
            return done(authors[name]);
        }

        name = name.replace('@', '');

        request(twitterBase + name, function (error, response, body) {
            var $ = cheerio.load(body),
                details;

            if (error) {
                details = undefined;
            } else {
                details = {
                    name: $('.ProfileHeaderCard-name a').text(),
                    image: $('.ProfileAvatar-image').attr('src'),
                    bio: $('.ProfileHeaderCard-bio').text(),
                    website: $('.ProfileHeaderCard-urlText a').attr('title'),
                    location: $('.ProfileHeaderCard-locationText').text()
                };
            }

            authors[name] = details;

            done(details);
        });
    };

module.exports = function (posts, done) {
    if (Object.prototype.toString.call(posts) === '[object Array]') {
        posts.forEach(function (post, count) {
            requestAuthorInformation(post.author, function (details) {
                post.author = details;

                if (posts.length === (count + 1)) {
                    done(posts);
                }
            });
        });
    } else {
        requestAuthorInformation(posts.author, function (details) {
            posts.author = details;
            done(posts);
        });
    }
};
