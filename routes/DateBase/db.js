var mongodb=require("mongodb");
var mongoClient=mongodb.MongoClient;
const DBurl="mongodb://127.0.0.1/";
const DBName="blogs";

// 增加
exports.insertData=function (condition,tableName,callback) {
      mongoClient.connect(DBurl,{useNewUrlParser: true},function (err,client) {
          if(err){
              console.log(err);
              return false
          }
          //指定数据库和集合名字
          var insertName=client.db(DBName).collection(tableName);
          // 执行的插入的操作
          insertName.insertMany([condition],function (err,result) {
              if(err){
                  callback("-1");
                  return falses
              }
              callback(result.insertedCount);
              client.close();
          })
      })
}

// 删除
exports.deleteData=function (Data,tableName,callback) {
    mongoClient.connect(DBurl,{useNewUrlParser: true},function (err,client) {
        if(err){
            console.log(err);
            return false
        }
        //指定数据库和集合名字
        var deleteName=client.db(DBName).collection(tableName);
        // 执行的插入的操作
        deleteName.deleteOne(condition,function (err,result) {
            if(err){
                callback("-1");
                return falses
            }
            callback(result.deletedCount);
            client.close();
        })
    })
}
// 修改
exports.upData=function(target,newData,tableName,callback) {
    mongoClient.connect(DBurl,{useNewUrlParser: true},function (err,client) {
        if(err){
            console.log(err);
            return false
        }
        //指定数据库和集合名字

        var upDataName=client.db(DBName).collection(tableName);
        // 执行的插入的操作
       upDataName.updateOne(target,{$set:newData},function (err,result) {
            if(err){
                callback("-1");
                return falses
            }
            callback(result.modifiedCount);
            client.close();
        })
    })
}
// 查询
exports.getFind=function (condition,tableName,callback) {
    mongoClient.connect(DBurl,{useNewUrlParser: true},function (err,client) {
        if(err){
            console.log(err);
            return false
        }
        //指定数据库和集合名字
        var findTable=client.db(DBName).collection(tableName);
        // 执行的插入的操作
        findTable.find(condition).toArray(function (err,result) {
            if(err) {
                console.log(err);
                return false
            };
                callback(result);
                client.close();
        })
    })
}