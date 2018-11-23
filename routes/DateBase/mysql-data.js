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
    connection.query("select * from web_user where user_name=?",[name],function (err,data) {
        if(err){
            console.log(err.stack);
            return false
        }
        if(data.length>0) {
            var tiaojian=data[0].user_id;
            connection.query("select * from web_home where user_id=?",[tiaojian],function (err,relut) {
                if(err){
                    console.log(err.stack);
                    return false
                }
                var fenlei=relut[0].home_fenlei.split("-");
                var zhaodaowo=relut[0].home_zhaodaowo.split("-");
                var touxiang=relut[0].home_touxiang;
                var shenghuozhao=relut[0].home_shenghuozhao;
                res.send({status:"200",msg:"成功返回",data:{"fenlei":fenlei,"zhaodaowo":zhaodaowo,"touxiang":touxiang,"shenghuozhao":shenghuozhao}})
            })
        }else{
            res.send({status:"404",msg:"找不到这个用户"});
        }
    })
    // connection.end();
}
exports.getWenzhang=function (req,res,yema,leixing) {
    connection.query("select count(*) as count from web_content",function (err,data) {
        if(leixing=="one"){
         var count=data[0].count;
         connection.query("select * from web_content limit "+yema+",9",function (err,relut) {
             res.send({"status":200,"count":count,"msg":"成功",data:relut});
         })
        }else{

        }
    })
}