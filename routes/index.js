var express = require('express');
var router = express.Router();
var acquire=require("./DateBase/mysql-data");
var url=require("url");
var ObjectID = require('mongodb').ObjectID;
/* GET home page. */
router.get('/', function(req, res, next) {

});
router.get('/findData', function(req, res, next) {
    var name=url.parse(req.url,true).query.name;
    console.log(name);
    acquire.getData(req,res,name);
});
module.exports = router;
