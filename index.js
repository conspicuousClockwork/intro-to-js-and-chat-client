//Boilerplate express code
var app = require('express')(); 
var http = require('http').Server(app);
var PORT = process.env.PORT || 3000;

//Import and use the socket.io library
//Assign the import to a variable to use later
var io = require('socket.io')(http); 


//This line of code declares a route for the website's index page.
app.get('/', function(req, res){ 
  res.sendFile(__dirname + '/index.html'); 
}); 

//Example of defining another route
//app.get('/example-page', function(req, res){ 
//  res.sendFile(__dirname + '/example-page.html'); 
//}); 

//This code uses the variable created using socket.io earlier
//When a connection is made, run the code within the function statement
io.on('connection', function(socket){
  //When a connection is open and the socket passed in receives a `chat message` action, run the code within the function statement
  socket.on('chat message', function(msg){ 
    //Immediately emit the incoming message using the original `io` variable
    //When io.emit is used, by default it will send the action to all open connections
    io.emit('chat message', msg);
    //Console log the message so that someone can view all messages sent on the server
    //This is optional
    console.log('message: ' + msg); 
  }); 
}); 

//Boilerplate Express code
//This will be the same for most web servers written in Express
http.listen(PORT, function(){
  console.log('listening on *:3000');
});
