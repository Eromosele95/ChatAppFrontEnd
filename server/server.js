
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3000;

const rooms = {}

server.listen(port, () => {
    console.log(`started on port: ${port}`);
})

io.on('connection', (socket) => {
    console.log(socket);
    console.log("A user connected");


    socket.on('joinedLobby', (data) =>{
    
        console.log('new conncetion made with '+ username + ' however room is ' + 
        data[room])
        console.log(data)
        console.log(data.values())
    })

    socket.on("joinRoom", function(data){
        "User trying to join " + 
        socket.join(data.room);
        console.log(data)
            socket.broadcast.to(data.room).emit('joinRoom', data)  
            console.log(data)
    })
})
io.on('message', (socket) => {
    console.log("message recieved "+ socket)
})






// app.get('/', (req, res) => {
//     res.render('index', {rooms: rooms})
// })

// app.get('/:room', (req, res) => {e
//     if(rooms[req.body.room] != null){
//         return res.redirect('/')
//     }
//     res.render('room', {roomName: req.params.room})
// })

// app.post('/room', (req, res) =>{
//     if(rooms[req.body.room] != null){
//         return res.redirect('/')
//     }
//     rooms[req.body.room] = { users: {}}
//     res.redirect(req.body.room)

//     io.emit('room-created', req.body.room)
// })




// io.on('connection', socket =>{
//     socket.on('new-user', (room,username) => {
//         socket.join(room)
//         rooms[room].users[socket.id] = username
//         socket.to(room).broadcast.emit('user-connected', username)
//     })
//     socket.on('sendmessage', (room,message)=> {
//         socket.to(room).broadcast.emit('chat', {message: message, username: rooms[room].users[socket.id]})
//     })
//     socket.on('disconnect', () => {
//         getUserRooms(socket).forEach(room => {
//             socket.broadcast.emit('user-disconnected', rooms[room].users[socket.id])
//             delete rooms[room].users[socket.id]
//         })
//     })
// })

// function getUserRooms(socket) {
//     return Object.entries(rooms).reduce((names, [name, room]) => {
//       if (room.users[socket.id] != null) names.push(name)
//       return names
//     }, [])
//   }