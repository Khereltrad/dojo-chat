module.exports =function(server){
   const io = require('socket.io')(server);

   io.on("connection", function (socket) {
   
      socket.on("mensuser", function (data) { socket.broadcast.emit('messagin',data);});
   });
}