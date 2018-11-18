var express = require('express');
var router = express.Router();
var getData=require("../node_modules/DateBase/db");
var url=require("url");
var ObjectID = require('mongodb').ObjectID;
/* GET home page. */
router.get('/', function(req, res, next) {

});
router.get('/findYonghu', function(req, res, next) {
    console.log("成功请求");
    var a=0;
    getData.getFind({"name":"5befe549a52a3d1748c6ef4e"},"head",function (resut) {
        if(resut.length>0){
            a=resut[0]._id;
            res.send({"msg":"成功","data":resut[0]});
            return a;
        }else{
            res.send({"msg":"失败","data":"失败"});
        }
    })
});
module.exports = router;
