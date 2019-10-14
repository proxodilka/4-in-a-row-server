const {Game} = require('./game');
const generateId = ()=>Math.random().toString(36).substr(2, 9);

class Rooms{
    constructor(){
        this.roomsList = [];
        this.playerToRooms = [];
        this.eventHandler = [];
    }

    getRoom(roomId){
        return this.roomsList.find(x=>x.id===roomId);
    }

    createNewRoom(name=`room ${generateId()}`, creator='__admin'){
        const game = new Game({name, creator});    
        this.roomsList.push(game);
        this._execEvent('rooms-updated');

        const eventListeners = this.eventHandler['rooms-updated'] || [];
        for(let event of eventListeners){
            game.on('status-changed', event);
        }
        return game;
    }

    getRoomsList(){
        return this.roomsList;
    }

    getGame(id){
        return this.getRoom(id).getInfo();
    }

    joinToRoom(roomId, {id, playerName, role}){
        const ind = this.roomsList.findIndex(x=>x.id===roomId);

        if (ind===-1){
            return {ok: false, reason: 'This room doesnt exists'};
        }

        const joinResult = this.roomsList[ind].joinPlayer({id, playerName, role});
        if (joinResult.ok){
            this.playerToRooms.push({playerId: id, roomId});
            this._execEvent('rooms-updated');
        }

        return joinResult;
    }

    getRoomName(id){
        const ind = this.roomsList.findIndex(x=>x.id===roomId);
        return this.roomsList[ind].name;
    }

    removeRoom(id){
        const ind = this.roomsList.findIndex(x=>x.id===id);
        const roomToDelete = this.roomsList[ind];
        if (!roomToDelete)
            return;
        
        const playersToKick = [...roomToDelete.players];
        playersToKick.forEach(player=>this.kickPlayer(player.id))

        this.roomsList.splice(ind,1);
        this._execEvent('rooms-updated');
    }

    kickPlayer(playerId){
        console.log(this.playerToRooms, playerId);
        const ind = this.playerToRooms.findIndex(x=>x.playerId===playerId);
        const info = this.playerToRooms[ind];
        if (!info)
            return;
        
        const room = this.getRoom(info.roomId);

        room.leavePlayer({id: info.playerId});
        this.playerToRooms.splice(ind, 1);

        this._execEvent('rooms-updated');
        this._execEvent('player-kicked-from-room', {playerId, room});
        return room;
    }

    on(eventName, eventListener){
        //'rooms-updated'
        //'game-updated'
        this.eventHandler[eventName] = this.eventHandler[eventName] || [];
        this.eventHandler[eventName].push(eventListener);

    }

    removeEventListener(eventName, eventListener=null){

    }

    _execEvent(eventName, ...args){
        const eventListeners = this.eventHandler[eventName];
        //console.log('executing event', eventName, eventListeners);
        for(let event of eventListeners){
            event(...args);
        }
    }
}

module.exports = {Rooms};