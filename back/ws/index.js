const getInsertPosition = (array)=>{
    const ind = array.findIndex((a)=>a>0);
    return (ind===-1?array.length:ind)-1;
}

const changeArrayElem = (array, pos, value)=>{
    return array.map((arr, i)=>{
        return arr.map((x, j)=>{
            return i===pos.x && j===pos.y?value:norm(x);
        });
    })
}

const updArr = (arr, colId)=>{
    arr = changeArrayElem(arr, {x: colId, y: getInsertPosition(arr[colId])}, curePlayer);
    return arr;
}

const eraseFromArr = (arr, val)=>{
    const ind = arr.findIndex(x=>x==val);
    if (ind>=0)
        players.splice(ind,1);
}

const norm = (x)=>{
    return x<0?0:x;
}


const getEmptyField = (N,M)=>{
    return Array(M).fill(Array(N).fill(0));
}

const idToCurePlayer = ()=>{
    return 1;
}

const checkForCureId = (arr, id, res)=>{
    const ind = arr.findIndex(x=>x==id);
    if (ind===-1)
        return ()=>res.status(403).send('invalid id for this room');
    return ()=>true;
}

const generateId = ()=>Math.random().toString(36).substr(2, 9);

const newRoom = (id=0, name='test-room', players=[])=>{
    return {id, name, players};
}

// class Room{
//     constructor(id=0, name='test-room', players=[], state="waiting players"){
//         this.id=id;
//         this.name=name;
//         this.players=players;
//         this.state=state;
//         this.field=getEmptyField(7,6);
//     }

//     playerConnected = (newPlayer)=>{
//         this.players.push(newPlayer);
//         this.tryStartGame();
//     }

//     tryStartGame = ()=>{
//         if (this.players.length==2){
//             this.startGame();
//         }
//     }

//     startGame = ()=>{
//         this.state="is on";
//     }

//     playerDisconnected = (disPlayer)=>{

//     }
// }

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const io = require('socket.io')(4001);


const app = express();
app.use(cors());
app.use(bodyParser());


let arr = getEmptyField(7,6);

let curePlayer = 1;

const players = [];
const rooms = [newRoom()];



app.listen(4000);
io.on('connection', socket=>{
    console.log('connected!', socket.id);
    socket.emit('connect-init', rooms);

    socket.on('get-rooms', ()=>{
        console.log('sending rooms to client');
        socket.emit('connect-init', rooms);
    })

    socket.on('create-room', data=>{
        rooms.push(newRoom(generateId(), data));
        socket.broadcast.emit('rooms-list-updated', rooms);
    })

    socket.on('disconnect', socket=>{
        console.log('disconnected', socket.id);
    });

    socket.on('room-enter', id=>{
        console.log(rooms[id].players.length);
        if (rooms[id].players.length>=2){
            socket.emit('kick-from-room', 'too many players in this room');
            return;
        }

        socket.join(rooms[id].name);
        rooms[id].players.push(socket.id);

        if (rooms[id].players.length===2){
            io.to(rooms[id].name).emit('start-game', rooms[id].players);
        }

        socket.on('leave', ()=>{
            console.log('player leavs room');
        });

        socket.on('move', columnId=>{
            updArr(arr, columnId);
            curePlayer=curePlayer==1?2:1;
            socket.to(rooms[id].name).broadcast.emit('field-updated', {
                columnId
            });
        });

    })
    //socket.emit('rooms-list-updated', rooms);
})

io.on('disconnected', socket=>{
    console.log('disconnected', socked.id);
})



app.get('/room-list', (req, res)=>{
    req.send({rooms})
});

app.post('/create-room', (req, res)=>{

});