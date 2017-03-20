
export default (io) => {
  const sessionIo = io.of('/Chess');

  const players = [];
  let ready = 0;

  sessionIo.on('connection', (socket, next) => {
    const {id} = socket;
    players.push(id);
    console.log('  --> SocketIO on connection', id);
    console.log('Online players: ' + players.length + 'ready: ' + ready);

    socket.on('disconnect', () => {
      console.log('disconected');
      players.shift();
      if (ready > 0) ready--;
      console.log('online players: ' + players.length + 'ready ' + ready)
    });

    socket.on('ready', () => {
      ready++;
      console.log(ready);
      if (ready > 1) {
        console.log('emit allReady');
        socket.emit('allReady', 'black');
        socket.broadcast.emit('allReady', 'white');
      }
    });

















    socket.on('clickedPad', (pad) => {
      console.log('wwwwwwwwwwwwwww', pad);
      socket.broadcast.emit('clickedPad', (pad));
      socket.emit('clickedPad', (pad));
    });

    socket.on('leaveGame', () => {
      console.log('leave game');
      socket.broadcast.emit('leaveGame');
    });

    socket.on('nextLevel', () => {
      console.log('next level');
      const move = Math.floor(Math.random() * 4);
      socket.emit('nextLevel', move);
      socket.broadcast.emit('nextLevel', move);
    });

    if (next) next();
  });
};
