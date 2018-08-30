var app = require('express')(); 
var http = require('http').Server(app); 
var io = require('socket.io')(http); 
var PORT = process.env.PORT || 3000; 
 
app.get('/', function(req, res){ 
  res.sendFile(__dirname + '/index.html'); 
}); 
 
io.on('connection', function(socket){ 
  socket.on('chat message', function(msg){ 
    io.emit('chat message', msg); 
    console.log('message: ' + msg); 
  }); 
}); 

http.listen(PORT, function(){
  console.log('listening on *:3000');
});
