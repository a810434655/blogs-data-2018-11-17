var mysql=require("mysql");
// 直连操作过程
var connection =mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"blogs",
    //     // 允许多语句查询
    multipleStatements:true
})
// var pool =mysql.createPool({
//     // 主机名默认localhost
//     host:"localhost",
//     // 端口号默认3306
//     port:3306,
//     // 用户名
//     user:"root",
//     // 密码
//     password:"root",
//     // 库名
//     database:"blogs",
//     // 允许多语句查询
//     multipleStatements:true
// })
// // 连接池连接
// pool.getConnection(function (err,connection) {
//     // connection参数和直连一样的
//     var neirong=1;
//     var name="dwa"
//         connection.query("select * from user where name=?",[name],function (err,data) {
//             if(err){
//                 console.log(err);
//                 return false
//             }
//             var tiaojian=data[0].id;
//             console.log(tiaojian);
//             connection.query("select * from Home where name=?",[tiaojian],function (err,data) {
//                 if(err){
//                     console.log(err);
//                     return false
//                 }
//                 console.log(data);
//             })
//             connection.release;
//         })
// })

// 直连
exports.getData=function (req,res,name) {
    connection.query("select * from user where name=?",[name],function (err,data) {
        if(err){
            console.log(err.stack);
            return false
        }
        console.log(data.length);
        if(data.length>0) {
            var tiaojian=data[0].id;
            connection.query("select * from home where name=?",[tiaojian],function (err,relut) {
                if(err){
                    console.log(err.stack);
                    return false
                }
                res.send({status:"200",msg:"成功返回",data:relut[0]})
            })
        }else{
            res.send({status:"404",msg:"找不到这个用户"});
        }
    })
    // connection.end();
}