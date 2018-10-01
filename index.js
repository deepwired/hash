const express = require('express'),
http = require('http'),
app = express(),
server = http.createServer(app),
io = require('socket.io').listen(server);

app.get('/', (req, res) => {
	res.send('Chat Server is running on port 3000')
});


server.listen(3000,()=>{
	console.log('Node app is running on port 3000')
});


// When a user connectes to a socket, the only socket
io.on('connection', (socket) => {
	console.log('user connected')
	socket.on('join', function(userNickname) {
        console.log(userNickname +" : has joined the chat "  )
        socket.broadcast.emit('userjoinedthechat',userNickname +" : has joined the chat ")
    });
});


// When someone connected to the socket shoots a message
 socket.on('messagedetection', (senderNickname,messageContent) => {
	console.log(senderNickname+" :" +messageContent)
	// create a message object
	let message = {"message":messageContent, "senderNickname":senderNickname}
	// send the message to the client side  
	socket.emit('message', message )
});


// When the user disconnects from the socket


https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.TTiayG5m90DxlT4iCZQBT3fzEAINWKiC_SLZ939ZoFM

socket.on('disconnect', function() {
    console.log( 'user has left ')
    socket.broadcast.emit( "userdisconnect" ,' user has left')
});