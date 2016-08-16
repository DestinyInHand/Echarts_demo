/**
 * Created by Administrator on 2016/8/16.
 */
var io = require('socket.io')();



io.on('connection',function(socket){
    console.log(socket.id + ': connection');

    //为每一个连接绑定disconnect事件
    socket.on('disconnect',function(){
        console.log(socket.id + ':disconnect');
    });

    socket.on('say',function(content){
        content = content.trim();
        console.log(socket.id + ': say(' + content + ')');
    });
    
   
});

exports.listen = function(server) {
    return io.listen(server);
}