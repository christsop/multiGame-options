'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = io => {
  const sessionIo = io.of('/ticTacToe');

  sessionIo.on('connection', socket => {
    const id = socket.id;

    console.log('  --> SocketIO on connection', id);

    socket.on('newGame', action => {
      console.log('NEWGAME ACTION', action);
      socket.emit('newGame', action);
      socket.broadcast.emit('newGame', action);
    });

    socket.on('markTile', action => {
      console.log('Mark ACTION', action);
      socket.broadcast.emit('markTile', action);
    });
  });
};