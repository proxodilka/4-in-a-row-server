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

const handelDisconections = (id)=>{
    clearTimeout(timeoutHandler[id]);
    //console.log('clearTimeout',id);
    const timeOutId = setTimeout(()=>kickPlayer(id), delay);
    //console.log('setTimeout',id);
    timeoutHandler[id]=timeOutId;
}

const kickPlayer = (id)=>{
    console.log('trying to kick player',id,players);
    if (players.length==0)
        return;
    sessionEnd = {
        end: true,
        reason: 'lost connection with second player'
    }
    const ind = players.findIndex((x)=>x===id);
    if (ind===-1)
        return;
    players.splice(ind,1);
    console.log('timeout', players);
}

const initSession = ()=>{
    console.log('initing session');
    sessionEnd = {
        end: false
    }

    players.splice(0,players.length);
    arr = getEmptyField(7,6);
    curePlayer = 1;
    roomStatus='waiting for second player';
    winState = {
        isWin: false
    }
}

let sessionEnd = {
    end: false
};
const timeoutHandler=[];

const delay=2500;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stuff = require('./stuff');
const checkWin = stuff.checkWin;


const app = express();
app.use(cors());
app.use(bodyParser());

let roomStatus = 'waiting for second player';

let arr = getEmptyField(7,6);

let winState = {
    isWin: false
};

let curePlayer = 1;

const players = [];

app.post('/init_connection', (req,res)=>{
    const {id} = req.body;
    if (players.length<2){
        players.push(id);
        res.status(200).send('done');
    }
    else{
        res.status(403).send('too many players in the room');
    }
    if (players.length===2)
        roomStatus='game is on';
    console.log('/init',players);
})

app.post('/end_connection', (req,res)=>{
    const {id} = req.body;
    eraseFromArr(players,id);
    console.log('/end', players);
    res.send('ok');
})


app.get('/info', (req, res)=>{
    const {id} = req.query;
    handelDisconections(id);
    if (sessionEnd.end){
        res.status(403).send(sessionEnd.reason);
        initSession();
        return;
    }
    res.send({
        field: arr,
        cureId: players[curePlayer-1],
        curePlayer,
        status: roomStatus,
        winState
    });
});

app.post('/move', (req, res)=>{
    const {id, columnId} = req.body;
    //console.log('post', id);

    arr = updArr(arr, columnId);
    

    const win = checkWin(arr, 4);
    if (!win.isWin){
        curePlayer=curePlayer==1?2:1;
    }   
    else{
        endGame(win);
    }

    res.send('ok');
})





app.get('/clear', (req,res)=>{
    players.splice(0,players.length);
    res.send('ok');
    console.log('/clear',players);
})

app.get('/print_players', (req,res)=>{
    res.send(players);
    console.log('/print',players);
})

app.listen(4000);



const endGame = (win)=>{
    winState = win;
}