module.exports =function(server){
   const io = require('socket.io')(server);

   io.on("connection", function (socket) {
   
      socket.on("mensuser", function (data) { console.log('llegamos acá'); socket.broadcast.emit('messagin',data);});
   });
}