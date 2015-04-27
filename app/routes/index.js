var express = require('express');
var router = express.Router();
var fs = require("q-io/fs");
var marked = require('marked');

// set marked config
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

function getCurrentRequestPath(req) {
    return getHost(req) + req.originalUrl;
}

function getHost(req) {
    return req.protocol + '://' + req.get('host');
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        currentPath: getCurrentRequestPath(req),
        host: getHost(req)
    });
});

// blog
router.get('/articles/:entry', function (req, res, next) {
    // get file name
    var filename = req.params.entry;
    var path = __dirname + '/../blog-articles/' + filename + '.md';

    fs.stat(path)
        // check if path exists
        .then(function (stat) {
            if (!stat.isFile()) {
                throw new Error('File does not exists');
            }
        })
        // open file
        .then(function () {
            return fs.read(path);
        })
        // process contents
        .then(function (contents) {
            res.render('article', {
                title: filename.substr(10).replace(/\-/g, ' '),
                contents: marked(contents),
                currentPath: getCurrentRequestPath(req),
                host: getHost(req)
            });
        })
        // error handling
        .catch(function (e) {
            e.message = "Cannot find article";
            e.status = 404;
            next(e);
        });
})

module.exports = router;
