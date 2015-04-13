var express = require('express');
var router = express.Router();
var fs = require("q-io/fs");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// blog
router.get('/articles/:entry', function (req, res, next) {
    // get file name
    var filename = req.params.entry;
    var path = __dirname + '/../blog-articles/' + filename + '.html';

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
            res.send(contents);
        })
        // error handling
        .catch(function (e) {
            e.message = "Cannot find article";
            e.status = 404;
            next(e);
        });
})

module.exports = router;
