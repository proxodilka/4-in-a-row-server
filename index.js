const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {Rooms} = require('./rooms');
const io = require('socket.io')(4001);


const app = express();
app.use(cors());
app.use(bodyParser());

const rooms = new Rooms();

const clearEmptyRoomsIntervalTime = (1000*60); //1min
const timeToEmptyRoomGetRemoved = 5*(1000*60); //5min

rooms.on('rooms-updated', ()=>io.to('main-lobby').emit('rooms-list-updated', rooms.getRoomsList()));
rooms.on('player-kicked-from-room', (data)=>playerKicked(data));

const watcherIntervalId = setInterval(()=>clearEmptyRooms(), clearEmptyRoomsIntervalTime);

const clearEmptyRooms = ()=>{
    console.log('clearing...');
    const cureTime = Date.now();
    const roomsToDelete = [];
    rooms.roomsList.forEach((room)=>{
        if (room.players.length===0 && (cureTime-room.lastActionEvent)>=timeToEmptyRoomGetRemoved && room.creator!=='__admin'){
            roomsToDelete.push(room.id);
        }
    })

    roomsToDelete.forEach(roomId=>rooms.removeRoom(roomId));
}

const tryToCreateRoom = ({roomName, creator='__admin'}, callback=()=>1)=>{

    const ind = rooms.roomsList.findIndex(x=>x.name===roomName);

    if (ind!==-1){
        callback('room already exists');
        return;
    }

    const justCreatedRoom = rooms.createNewRoom(roomName, creator);
    justCreatedRoom.on('game-updated', (data)=>io.to(justCreatedRoom.id).emit('field-updated', data));
    justCreatedRoom.on('room-on-delete-now', ()=>io.to(justCreatedRoom.id).emit('kick-from-room', 'second player has leaved the game'));

    callback(null);
    
    
}

const removeRoom = ({roomId, initiator}, callback)=>{
    console.log('trying to delete room');
    const roomToDelete = rooms.getRoom(roomId);
    if (roomToDelete.creator===initiator){
        rooms.removeRoom(roomId);
    }
    else{
        callback('you are not allowed to delete this room');
    }
}

const joinRoom = ({roomId, playerName, role}, socket, callback)=>{
    console.log('trying to join room', roomId, rooms);

    const joinResult = rooms.joinToRoom(roomId, {id: socket.id, playerName, role});

    if (!joinResult.ok){
        callback(joinResult);
        return;
    }

    socket.join(roomId);
    socket.leave('main-lobby');
    io.to(roomId).emit('field-updated', rooms.getRoom(roomId).getInfo())
    //io.to(roomId).emit('field-updated', {data: rooms.getRoom(roomId).getInfo(), initiator: socket.id});
    
    callback({ok: true});
}

const kickPlayer = (socket)=>{
    const id = socket.id;
    const deletedRoom = rooms.kickPlayer(id);
    // if (deletedRoom){
    //     socket.leave(deletedRoom.id);
    //     socket.join('main-lobby');
    //     io.to(deletedRoom.id).emit('kick-from-room', 'second player has leaved the game');
    // }
}

const playerKicked = ({playerId, room, reason='you are kicked from the room'})=>{
    const socket = io.sockets.connected[playerId];
    console.log('player kicked', playerId, room);
    if (socket){
        socket.leave(room.id);
        socket.join('main-lobby');
        socket.emit('kick-from-room', reason);
        // io.to(room.id).emit('kick-from-room', 'second player has leaved the game');
    }
}

const move = ({moveInfo: {columnId, action}, roomInfo: {roomId}}, socket, callback)=>{
    rooms.getRoom(roomId).move(columnId, action);
}

const restart = ({roomId}, socket)=>{
    const game = rooms.getRoom(roomId);
    if (game.gameStatus==='ended'){
        game.restart();
    }
}

io.on('connection', socket=>{
    socket.join('main-lobby');
    socket.on('get-rooms', (data, callback)=>callback(rooms.getRoomsList()));
    socket.on('create-room', (data, callback)=>tryToCreateRoom(data, callback));
    socket.on('delete-room', (data, callback)=>removeRoom(data, callback));
    socket.on('join-room', (data, callback)=>joinRoom(data, socket, callback));
    socket.on('move', (data, callback)=>move(data, socket, callback));
    socket.on('restart', (data, callback)=>restart(data, socket, callback));


    socket.on('leave-room', ()=>kickPlayer(socket));
    socket.on('disconnect', ()=>kickPlayer(socket));
})

tryToCreateRoom({roomName: 'test-room'});

app.listen(4000);

app.get('/', (req,res)=>{
    res.send('hello!');
})
