(window.webpackJsonpfirst=window.webpackJsonpfirst||[]).push([[0],{123:function(e,t){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(55),i=n.n(o),c=(n(66),n(11)),l=n(10),s=n(16),u=n(1),f=(n(33),r.a.createContext({})),m=(n(83),n(84),n(85),n(86),["transparent","red","orange"]),d=function(e){var t=e.val,n=e.pulse,a=void 0!==n&&n,o={backgroundColor:m[Math.abs(t)],opacity:t<0?.3:1},i="circle";return a&&(i+=" pulseAnimation"),r.a.createElement("div",{className:"cell"},r.a.createElement("div",{style:o,className:i}))},p=function(e){var t=e.data,n=e.columnAction,a=e.id,o=e.cellsToPulse;return r.a.createElement("div",{onClick:function(){return n(a,"action")},onMouseEnter:function(){return n(a,"hint")},onMouseLeave:function(){return n(a,"hideHint")},onTouchStart:function(){return n(a,"hint")},className:"column"},t.map((function(e,t){return r.a.createElement(d,{key:a.toString()+t.toString(),val:e,pulse:-1!==o.findIndex((function(e){return e[1]===t}))})})))},v=(n(87),function(e){var t,n=e.winner,a=e.currentPlayer,o=e.restart,i=e.exitGame,c=e.style;switch(n){case-1:t="\u0421\u0435\u0439\u0447\u0430\u0441 \u0445\u043e\u0434\u0438\u0442 ".concat(a);break;case 0:t="\u041d\u0438\u0447\u044c\u044f!";break;default:t="\u041f\u043e\u0431\u0435\u0434\u0438\u043b ".concat(a)}return r.a.createElement("div",{style:c,className:"tableHeader"},r.a.createElement("div",{className:"curePlayerText"},t),r.a.createElement("div",{className:"buttonsContainer"},r.a.createElement("button",{onClick:o,className:"btn btn-outline-primary"},r.a.createElement("i",{className:"fa fa-repeat"})),r.a.createElement("button",{onClick:i,className:"btn btn-danger"},r.a.createElement("i",{className:"fa fa-times"}))))}),y=function(e){var t=e.currentPlayer,n=e.field,a=e.columnAction,o=e.cellsToPulse,i=e.gameState,c=e.exitGame,l=e.isFieldBlocked,s=e.winner,u=e.restart,f="tableField";return console.log("field",n),"setup"===i||"waiting for players"===i?f+=" disabled":("ended"===i||l)&&(f+=" notActive"),r.a.createElement("div",{className:"tableRoot"},r.a.createElement(v,{currentPlayer:t,exitGame:c,winner:s,restart:u,style:{marginBottom:"5px"}}),r.a.createElement("div",{className:f},n.map((function(e,t){var n=o.filter((function(e){return e[0]===t}));return r.a.createElement(p,{key:t,id:t,columnAction:a,data:e,cellsToPulse:n})}))))},h=n(6),g=(n(88),n(8)),b=r.a.createContext({});function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j,w,P="no errors",k=function(){var e,t,n=function(e){P="exiting with no errors",T(e),_(!0)},o=Object(a.useContext)(b),i=o.playerInfo,c=i.id,s=i.players,f=i.userName,m=o.gameInfo.role,d=o.controls.useServer,p=o.socket,v=o.roomInfo.roomId,h=Object(a.useState)({field:(e=7,t=6,Array(t).fill(Array(e).fill(0))),gameStatus:"connecting to the server...",curePlayer:0,winState:{isWin:!1,winner:-1,cellsToPulse:[]},players:s}),E=Object(u.a)(h,2),j=E[0],w=E[1];Object(a.useEffect)((function(){j.callAgain&&(w(O({},j,{callAgain:!1})),F("calling"))}),[j]);var k=Object(a.useState)(f),N=Object(u.a)(k,1)[0],S=Object(a.useState)(c),I=Object(u.a)(S,1)[0],x=Object(a.useState)(!0),C=Object(u.a)(x,2),A=C[0],D=C[1],M=Object(a.useState)(!1),R=Object(u.a)(M,2),W=R[0],_=R[1],F=d({socket:p,playerName:N,handleData:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log("data",e,I);var n=e.field,a=e.gameStatus,r=e.curePlayer,o=e.winState,i=e.players,c=e.lastMoveInitiator;console.log("game",j,n),console.log("initiator",c,I),w({field:c.id===I?j.field:n,gameStatus:a,curePlayer:r,winState:o,players:i,callAgain:t}),"player"===m&&i[r-1]&&i[r-1].id==I&&"is on"==a&&D(!1)},onError:n,roomId:v,role:m});Object(a.useEffect)((function(){"player"===j.initiator&&F("move",{moveInfo:{columnId:j.lastColumn,action:j.lastAction},roomInfo:{roomId:v}})}),[j]);var T=function(e){e&&(P="".concat(e," | ",0))};return r.a.createElement("div",{className:"GameRoot"},W?r.a.createElement(l.a,{to:{pathname:"/",state:{errMsg:P}}}):null,r.a.createElement(y,{columnAction:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t[0],r=t[1],o=0;switch(r){case"action":o=j.curePlayer;break;case"hint":o=-j.curePlayer;break;case"hidehint":o=0;break;default:o=0}var i={x:a,y:Object(g.getInsertPosition)(j.field[a])};i.y<0||(w(O({},j,{field:Object(g.changeArrayElem)(j.field,i,o),curePlayer:"action"==r?1==j.curePlayer?2:1:j.curePlayer,lastAction:r,lastColumn:a,initiator:"player"})),"action"===r&&D(!0))},winner:j.winState.winner,currentPlayer:j.players[j.curePlayer-1]?j.players[j.curePlayer-1].playerName:"Unknown player",field:j.field,cellsToPulse:j.winState.cellsToPulse,gameState:j.gameStatus,exitGame:n,isFieldBlocked:A,restart:function(){"player"===m&&F("restart",{id:I,roomId:v})}}),r.a.createElement("div",{className:"status"},j.gameStatus," ","spectator"===m?" | You are in spectator mode":null))},N=[],S=function(){return 1},I={start:0,maxTime:2e3},x=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},C=function(e){var t=0,n=S(N,w);if(n.isWin)return"draw"===n.isWin?0:n.winner===e?1e31:-1e31;if(D(1===e?2:1)>=0)return-1e31;for(var a=2;a<=w;a++)t+=(n=S(N,a,0)).filter((function(t){return t.winner===e})).length*Math.pow(10,5*a),t-=n.filter((function(t){return t.winner!==e})).length*Math.pow(10,a);return t},A=function(){var e=[];return N.forEach((function(t,n){var a=function(e){var t=e.findIndex((function(e){return e>0}));return(-1===t?e.length:t)-1}(t);a<0||e.push([n,a])})),e},D=function(e){var t=A(),n=!0,a=!1,r=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value;if(N[c[0]][c[1]]=e,S(N,w).isWin)return c[0];N[c[0]][c[1]]=0}}catch(l){a=!0,r=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}return-1},M=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n>=1)return C(j);var a=-2e31,r=-1,o=A(),i=[],c=!0,l=!1,s=void 0;try{for(var u,f=o[Symbol.iterator]();!(c=(u=f.next()).done);c=!0){var m=u.value;N[m[0]][m[1]]=t;var d=e(1===t?2:1,n+1);a<d&&(i=[],a=d,r=m[0],i.push({val:a,col:r})),a===d&&i.push({val:a,col:m[0]}),N[m[0]][m[1]]=0}}catch(p){l=!0,s=p}finally{try{c||null==f.return||f.return()}finally{if(l)throw s}}return n?a:i[x(0,i.length-1)].col},R=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;N=e,S=n,j=t,w=a,I.start=Date.now();var r=D(t);return r>=0?r:M(t)},W=(n(93),n(14)),_=n(15),F=n(59),T=n(58),G=n(60),B=(n(94),function(e){function t(){var e,n;Object(W.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(F.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={filters:[]},n.filterChange=function(e){(n.props.options.find((function(e){return e.active}))||{id:-1}).id!==e&&n.props.onChange(e)},n}return Object(G.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:this.props.style,className:"SF-buttonsContainer"},this.props.options.map((function(t,n,a){var o="btn";return t.active?o+=" btn-primary":o+=" btn-outline-secondary",n||(o+=" first"),n===a.length-1&&(o+=" last"),r.a.createElement("button",{key:t.id,className:o,onClick:function(){return e.filterChange(t.id)}},t.title)})))}}]),t}(r.a.Component)),H=function(e){var t,n=e.onGameModeChange,o=e.gameModes,i=e.gameState,c=void 0===i?"setup":i,l=e.onGameStart,s=e.userName,u=e.onPlayerNameChange,f=(Object(a.useRef)(),"selectorRoot"),m="btn";"ended"===c?(m+=" btn-secondary",t=r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-repeat"})," \u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e")):"setup"===c&&(m+=" btn-success",t=r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-play"})," \u0418\u0433\u0440\u0430\u0442\u044c")),"is on"===c&&(f+=" disabled",m+=" btn-secondary",t=r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-repeat"})," \u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"));return r.a.createElement("div",{className:"headerRoot mb-3"},r.a.createElement("div",{className:"titleRoot"},r.a.createElement("h1",{style:{flexShrink:0}},"4 in a row"),r.a.createElement("input",{style:{minWidth:0},type:"text",className:"playerName",value:s,onChange:function(e){return function(e){u(e.target.value)}(e)}})),r.a.createElement("div",{className:"mb-1 launchRoot"},r.a.createElement("button",{onClick:l,className:m},t)),r.a.createElement("div",{className:f+" mb-1"},r.a.createElement(B,{onChange:n,options:o,style:{flexBasis:"100%"}})))},L=function(e){var t=e.socket,n=e.playerName,r=e.handleData,o=e.onError,i=e.roomId,c=e.role,l=Object(a.useRef)();Object(a.useEffect)((function(){l.current=r})),Object(a.useEffect)((function(){return t.emit("join-room",{roomId:i,playerName:n,role:c},(function(e){console.log("join-room",o),e.ok||o(e.reason)})),t.on("field-updated",(function(e){return l.current(e)})),t.on("kick-from-room",o),t.on("disconnect",(function(){o("connection lost")})),function(){t.emit("leave-room",{id:t.id,roomId:i}),t.removeAllListeners("field-updated"),t.removeAllListeners("kick-from-room")}}),[]);return function(e,n){t.emit(e,n)}};function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=n(95).Field,q=function(){return Math.random().toString(36).substr(2,9)},z={field:new Y,gameStatus:"waiting for players",curePlayer:1,players:[],winState:{isWin:!1,winner:-1,cellsToPulse:[]},creator:"__admin"},K=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(W.a)(this,e);var n=U({},z,{},t);this.id=q(),this.name=n.name,this.field=new Y,this.gameStatus=n.gameStatus,this.curePlayer=n.curePlayer,this.players=[],this.spectators=[],this.creator=n.creator,this.lastMoveInitiator=0,this.lastActionEvent=Date.now(),this.winState={isWin:!1,winner:-1,cellsToPulse:[]},this.eventHandler=[]}return Object(_.a)(e,[{key:"joinPlayer",value:function(e){var t=e.id,n=e.playerName,a=e.role;switch(console.log("trying to join player"),a){case"player":if(this.players.length>=2)return{ok:!1,reason:"too many players in the room"};this.players.push({id:t,playerName:n}),2==this.players.length&&(this.gameStatus="is on");break;case"spectator":this.spectators.push({id:t,playerName:n})}return this._execEvent("game-updated",this.getInfo()),this._execEvent("status-changed",this.gameStatus),{ok:!0}}},{key:"leavePlayer",value:function(e){var t=e.id;console.log("trying to kick",t,this.players);var n=this.players.findIndex((function(e){return e.id==t}));if(-1!=n)this.gameStatus="on delete",this._execEvent("room-on-delete-now"),this.players.splice(n,1),console.log("/leaves",this.players),0==this.players.length&&this.reset();else{var a=this.spectators.findIndex((function(e){return e.id==t}));if(-1==a)return;this.spectators.splice(a,1)}}},{key:"setCurePlayer",value:function(e){this.curePlayer=e,this._execEvent("game-updated",this.getInfo())}},{key:"setField",value:function(e){this.field=e,this._execEvent("game-updated",this.getInfo())}},{key:"getInfo",value:function(){return{id:this.id,field:this.field.getField(),gameStatus:this.gameStatus,curePlayer:this.curePlayer,players:this.players,winState:this.winState,lastMoveInitiator:this.lastMoveInitiator}}},{key:"move",value:function(e,t){var n=0;switch(t){case"action":n=this.curePlayer;break;case"hint":n=-this.curePlayer;break;case"hidehint":n=0;break;default:n=0}var a=this.field.move(e,n);this.lastMoveInitiator=this.players[this.curePlayer-1],console.log(a),this.winState=U({},this.winState,{},a,{cellsToPulse:a.indexes||[]}),this.winState.isWin||"action"!==t?this.winState.isWin&&(this.gameStatus="ended",this._execEvent("status-changed",this.gameStatus)):(console.log("setting new player"),this.curePlayer=1==this.curePlayer?2:1),this._execEvent("game-updated",this.getInfo())}},{key:"restart",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"is on";console.log("restarting"),this.field.reset(),this.gameStatus=e,this.curePlayer=z.curePlayer,this.winState=z.winState,this._execEvent("game-updated",this.getInfo()),this._execEvent("status-changed",this.gameStatus),console.log(this.gameStatus)}},{key:"reset",value:function(){this.restart(z.gameStatus),this._execEvent("status-changed",this.gameStatus)}},{key:"on",value:function(e,t){this.eventHandler[e]=this.eventHandler[e]||[],this.eventHandler[e].push(t),console.log("just pushed event|game",e,this.eventHandler,this.id)}},{key:"removeListener",value:function(e,t){switch(typeof t){case"string":case"function":break;default:return}}},{key:"_execEvent",value:function(e){var t=this.eventHandler[e];if(t){var n=t;this.lastActionEvent=Date.now(),console.log("executing event",e,n,this.eventHandler);for(var a=arguments.length,r=new Array(a>1?a-1:0),o=1;o<a;o++)r[o-1]=arguments[o];var i=!0,c=!1,l=void 0;try{for(var s,u=(n||[])[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var f=s.value;f.apply(void 0,r)}}catch(m){c=!0,l=m}finally{try{i||null==u.return||u.return()}finally{if(c)throw l}}}}}]),e}();function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e){var t=e.field,n=e.curePlayer;return console.log("ai",n,t),R(t.map((function(e){return Object(s.a)(e)})),n,g.checkWin)},Z=function(e,t){var n=e.handleData,r=(e.getGame,t.playerInfo.players),o=t.gameInfo.gameMode,i=Object(a.useRef)(new K).current;Object(a.useEffect)((function(){i.joinPlayer(V({},r[0],{role:"player"})),i.joinPlayer(V({},r[1],{role:"player"})),n(i.getInfo(),!0)}),[]);var c=function(){i.winState.isWin||"ai"==o.alias[i.curePlayer-1]&&s({moveInfo:{columnId:-1,action:"action"}})},l=function(e){i.restart(),n(i.getInfo(),!0)},s=function(e){var t=e.moveInfo,a=t.columnId,r=t.action;if("action"==r)switch(a>=0&&i.move(a,r),o.alias[i.curePlayer-1]){case"player":n(i.getInfo(),!0);break;case"ai":var c=X(i.getInfo());i.move(c,"action"),n(i.getInfo(),!0)}};return function(e,t){switch(e){case"move":s(t);break;case"restart":l(t);break;case"calling":c()}}};function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ee=function(e){var t=e.fieldInfo,n=e.gameInfo,a=e.user,r=e.socket,o=e.roomInfo,i=(t.RowsNumber,t.ColumnNumber,t.WinLen,n.gameMode),c=a.userName,l=i.id,s=(i.alias,i.role),u=[];if("multiplayer"!==i.id){switch(s="player",l=1,i.alias[0]){case"player":u.push({id:1,playerName:"Player 1"});break;case"ai":u.push({id:2,playerName:"AI 1"});break;default:u.push({id:1,playerName:"unknown player"})}switch(i.alias[1]){case"player":u.push({id:1,playerName:"Player 2"});break;case"ai":u.push({id:2,playerName:"AI 2"});break;default:u.push({id:1,playerName:"unknown player"})}}else l=r.id;var f={playerInfo:{id:l,players:u,userName:c},gameInfo:{role:s,gameMode:i},roomInfo:{roomId:o||1},socket:r};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f,{controls:{useServer:"multiplayer"==i.id?L:function(e){return Z(e,f)}}})},te=function(){var e=Object(a.useContext)(f),t=ee(e);return r.a.createElement(b.Provider,{value:t},r.a.createElement(k,null))},ne=function(e){return void 0===e.location.state?r.a.createElement(l.a,{to:"/"}):(console.log("interface"),r.a.createElement(f.Provider,{value:e.location.state},r.a.createElement(te,null)))},ae=function(e){return r.a.createElement("div",null,"\u041f\u043e\u0431\u0435\u0434\u0438\u043b \u0438\u0433\u0440\u043e\u043a ".concat(e.location.winner))},re=n(29),oe=n.n(re),ie=(n(126),function(e){var t=e.roomInfo,n=e.userInfo,a=e.onRoomDelete,o=e.onRoomEnter;return r.a.createElement("div",{className:"roomUnit",onClick:function(){return o(t.id)}},r.a.createElement("div",{className:"headerBlock"},r.a.createElement("div",{className:"roomName"},t.name),r.a.createElement("div",{className:"statusRoot"},r.a.createElement("div",{className:"gameStatus"},t.gameStatus),r.a.createElement("div",{className:"countersRoot"},r.a.createElement("div",{className:"players"},r.a.createElement("i",{className:"fa fa-user"})," ",t.players.length,"/2"),r.a.createElement("div",{className:"spectators"},r.a.createElement("i",{className:"fa fa-eye"})," ",t.spectators.length)))),r.a.createElement("div",{className:"buttonsBlock"},r.a.createElement("div",{className:"enterButtons"},r.a.createElement("button",{id:"spectator",className:"btn btn-outline-primary",onClick:function(e){e.stopPropagation(),o(t.id,"spectator")}},"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"),r.a.createElement("button",{id:"join",className:"btn btn-success",onClick:function(e){e.stopPropagation(),o(t.id)}},"\u0418\u0433\u0440\u0430\u0442\u044c")),t.creator===n.id?r.a.createElement("div",{className:"deleteButton"},r.a.createElement("button",{id:"delete",className:"btn btn-danger",onClick:function(e){e.stopPropagation(),a(t.id)}},r.a.createElement("i",{class:"fa fa-trash-o"}))):null))}),ce=(n(127),function(){return r.a.createElement("div",{class:"loader"},r.a.createElement("div",{className:"dot"}),r.a.createElement("div",{className:"dot"}),r.a.createElement("div",{className:"dot"}))}),le=(n(128),n(129),function(e){var t=e.text;return r.a.createElement("div",{style:{textAlign:"center"}},t)}),se=function(e){var t=e.onRoomEnter,n=e.socket,o=e.userInfo;console.log(n);var i=Object(a.useState)([]),c=Object(u.a)(i,2),l=c[0],s=c[1],f=Object(a.useState)("loading"),m=Object(u.a)(f,2),d=m[0],p=m[1],v=Object(a.useState)(""),y=Object(u.a)(v,2),h=y[0],g=y[1],b=function(e){console.log("upd rooms",e),e.reverse(),p("done"),s(e)};Object(a.useEffect)((function(){n.emit("get-rooms",{},b),n.on("connect-init",b),n.on("rooms-list-updated",b),n.on("connect",(function(){console.log("connect"),n.emit("get-rooms",{},b)})),n.on("disconnect",(function(){console.log("disconnected..."),p("loading"),s([])})),n.on("connect_error",(function(e){console.log("connect_error",e),p("error")}))}),[]);var E=function(e){n.emit("delete-room",{roomId:e,initiator:o.id})},O=function(e){null===e&&g("")};return r.a.createElement("div",{className:"roomListRoot"},r.a.createElement("form",{className:"newRoomForm",onSubmit:function(e){e.preventDefault(),n.emit("create-room",{roomName:h,creator:o.id},O)}},r.a.createElement("input",{type:"text",onChange:function(e){g(e.target.value)},placeholder:"name of the room",className:"form-control",value:h}),r.a.createElement("button",{className:"btn btn-outline-primary ml-2",type:"submit"},"create room")),r.a.createElement("div",{className:"roomsRoot"},"done"==d?l.map((function(e){return r.a.createElement(ie,{key:e.id,roomInfo:e,userInfo:o,onRoomEnter:t,onRoomDelete:E})})):null,"loading"==d?r.a.createElement(ce,null):null,"error"==d?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(le,{text:"Cant connect to the server. Trying to reconnect"})," ",r.a.createElement(ce,null)):null))};n(130);function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=oe()(window.location.origin),de=function(){return Math.random().toString(36).substr(2,9)},pe=function(e,t){var n=Object(a.useState)(null===localStorage.getItem(t)?e:JSON.parse(localStorage.getItem(t))),r=Object(u.a)(n,2),o=r[0],i=r[1],c=function(e){localStorage.setItem(t,JSON.stringify(e)),i(e)};return null===localStorage.getItem(t)&&c(e),[o,c]},ve=function(e){var t=Object(a.useState)([{id:0,title:r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-user"})," vs ",r.a.createElement("i",{className:"fa fa-desktop"})),alias:["player","ai"],active:!0},{id:1,title:r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-user"})," vs ",r.a.createElement("i",{className:"fa fa-user"})),alias:["player","player"],active:!1},{id:2,title:r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-desktop"})," vs ",r.a.createElement("i",{className:"fa fa-desktop"})),alias:["ai","ai"],active:!1}]),n=Object(u.a)(t,2),o=n[0],i=n[1],c=Object(a.useState)({}),s=Object(u.a)(c,2),f=s[0],m=s[1],d=Object(a.useState)(!1),p=Object(u.a)(d,2),v=p[0],y=p[1],h=Object(a.useState)(""),g=Object(u.a)(h,2),b=g[0],E=g[1],O=pe({id:de(),name:"Player ".concat(de())},"4-in-a-row-username"),j=Object(u.a)(O,2),w=j[0],P=j[1];Object(a.useEffect)((function(){var e=o.find((function(e){return e.active})),t=e.id,n=e.alias;m({id:t,alias:n})}),[o]);Object(a.useEffect)((function(){console.log("trying to start game",b),""!==b&&k()}),[b]);var k=function(){y(!0)};return r.a.createElement(r.a.Fragment,null,v?r.a.createElement(l.a,{to:{pathname:"/game",state:{fieldInfo:{RowsNumber:7,ColumnNumber:6,WinLen:4},gameInfo:{gameMode:f},user:{userName:w.name},roomInfo:b,socket:me}}}):null,r.a.createElement(H,{gameModes:o,onGameModeChange:function(e){i(o.map((function(t){return t.id===e?fe({},t,{active:!0}):fe({},t,{active:!1})})))},onGameStart:k,userName:w.name,onPlayerNameChange:function(e){P(fe({},w,{name:e}))}}),r.a.createElement("div",{className:"error"},e.location.state?e.location.state.errMsg:null),r.a.createElement(se,{onRoomEnter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"player";console.log("room in on picked",e),m({id:"multiplayer",alias:["player","web"],role:t}),E(e),console.log("onRoomPicked",me)},socket:me,userInfo:w}))},ye=(n(131),function(){return r.a.createElement("div",{className:"appRoot"},r.a.createElement(c.a,null,r.a.createElement(l.b,{path:"/",exact:!0,component:ve}),r.a.createElement(l.b,{path:"/game",exact:!0,component:ne}),r.a.createElement(l.b,{path:"/gameover",exact:!0,component:ae}),r.a.createElement(l.b,{path:"/multiplayer",exact:!0,component:k})))});i.a.render(r.a.createElement(ye,null),document.getElementById("root"))},61:function(e,t,n){e.exports=n(132)},66:function(e,t,n){},8:function(e,t,n){"use strict";n.r(t),n.d(t,"checkWin",(function(){return s})),n.d(t,"norm",(function(){return u})),n.d(t,"getEmptyField",(function(){return f})),n.d(t,"changeArrayElem",(function(){return d})),n.d(t,"getInsertPosition",(function(){return m})),n.d(t,"insertInColumn",(function(){return o}));var a=n(16),r=n(1),o=function(e,t,n){var a={x:t,y:m(e[t])};return d(e,a,n)},i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var a=0;a<t.length;a++)for(var r=a+1;r<t.length;r++)if(t[a]!==t[r])return!1;return!0},c=function(e,t,n){for(var a=[],r=t;r<n;r++)a.push([e,r]);return a},l=function(e,t,n,a){var r={arr:[],ind:[],role:"".concat(n," diagonal")};switch(n){case"left":n=0;break;case"right":n=1;break;default:n=-1}for(var o=n?0:Math.max(e-4,0),i=Math.min(e+4,a.length),c=Math.min(t+4,a[0].length),l=t,s=e;s>=o&&s<i&&l<c;n?s++:s--,l++)r.arr.push(a[s][l]),r.ind.push([s,l]);return r},s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=!0,s=[],u=!0,f=!1,m=void 0;try{for(var d,p=e.entries()[Symbol.iterator]();!(u=(d=p.next()).done);u=!0){var v=d.value,y=Object(r.a)(v,2),h=y[0],g=y[1],b=!0,E=!1,O=void 0;try{for(var j,w=function(){var u=j.value,f=(k=Object(r.a)(u,2))[0];k[1]<=0&&(o=!1);for(var m=0,d=[{arr:g.slice(f,f+t),ind:c(h,f,f+t),role:"column"},{arr:e.slice(h,h+t).map((function(e){return e[f]})),ind:c(f,h,h+t).map((function(e){return e.reverse()})),role:"row"},l(h,f,"right",e),l(h,f,"left",e)];m<d.length;m++){var p=d[m];if(-1===p.arr.findIndex((function(e){return e<=0}))&&p.arr.length===t&&i.apply(void 0,Object(a.a)(p.arr))&&(s.push({isWin:!0,winner:p.arr[0],indexes:p.ind}),n))return{v:s[0]}}},P=g.entries()[Symbol.iterator]();!(b=(j=P.next()).done);b=!0){var k,N=w();if("object"===typeof N)return N.v}}catch(S){E=!0,O=S}finally{try{b||null==P.return||P.return()}finally{if(E)throw O}}}}catch(S){f=!0,m=S}finally{try{u||null==p.return||p.return()}finally{if(f)throw m}}return o?{isWin:"draw",winner:0,indexes:c(0,0,e.length).map((function(e){return e.reverse()}))}:n?{isWin:!1}:s},u=function(e){return e<0?0:e},f=function(e,t){return Array(t).fill(Array(e).fill(0))},m=function(e){var t=e.findIndex((function(e){return e>0}));return(-1===t?e.length:t)-1},d=function(e,t,n){return e.map((function(e,a){return e.map((function(e,r){return a===t.x&&r===t.y?n:u(e)}))}))}},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t),n.d(t,"Field",(function(){return f}));var a=n(14),r=n(15),o=n(8),i=o.checkWin,c=o.getEmptyField,l=o.getInsertPosition,s=o.changeArrayElem,u={field:c(7,6)},f=function(){function e(){Object(a.a)(this,e),this.field=u.field}return Object(r.a)(e,[{key:"move",value:function(e,t){console.log("cId",e);var n={x:e,y:l(this.field[e]||[])};return this.field=s(this.field,n,t),i(this.field,4)}},{key:"getField",value:function(){return this.field}},{key:"reset",value:function(){this.field=u.field}}]),e}()}},[[61,1,2]]]);
//# sourceMappingURL=main.7c70b7b3.chunk.js.map