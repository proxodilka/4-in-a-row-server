# 4-in-a-row-server
Server side of four in a row game, that provides multiplayer features. Repo with client side: https://github.com/proxodilka/4-in-a-row. 

[Demo](https://inarow-server.herokuapp.com/#/).
![demo](https://s5.gifyu.com/images/graph_demo-2.gif)

## Small description
Here implemented separated lobbies concept with web-socket protocol. After establishing connection through web-socket, clients
could get/create/join/delete lobbies with sockets requests.

## Used technologies

- **[Express 4.17.1](https://github.com/expressjs/express/)**
- **[Socket.io 2.3.0](https://github.com/socketio/socket.io)**

## How to run it localy
- Clone repository

  `git clone https://github.com/proxodilka/4-in-a-row-server`
- Install packages

  `npm install`
  
- Run local server by `node index`

- Following instructions from [client repo](https://github.com/proxodilka/4-in-a-row) set custom server address
