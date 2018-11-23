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
    acquire.getData(req,res,name);
});
router.get('/wenzhang', function(req, res, next) {
    var yema=url.parse(req.url,true).query.yema;
    var leixing=url.parse(req.url,true).query.leixing;
    acquire.getWenzhang(req,res,yema,leixing);
});
module.exports = router;
