var express = require('express');
var router = express.Router();
var mecab = require('mecab-ya');

router.post('/', function(req, res, next) {
    mecab.nouns(req.body.text, function (err, result) {
        res.json(result);
    });
});

module.exports = router;
