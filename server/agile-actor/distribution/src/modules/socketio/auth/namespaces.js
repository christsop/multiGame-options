'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cookie = require('cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _models = require('../../../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = console.log;

const authEventType = user => user && user.email ? 'authorization' : 'unAuthorization';

exports.default = io => {
  const sessionIo = io.of('/session');

  sessionIo.use((socket, next) => {
    const cookies = socket.request.headers.cookie;
    socket.sessionCookieId = _cookie2.default.parse(cookies)['koa.sid'];
    next();
  });

  sessionIo.on('connection', (socket, next) => {
    const sessionCookieId = socket.sessionCookieId,
          id = socket.id;

    const sid = `koa:sess:${sessionCookieId}`;
    log('  --> SocketIO on connection', id, sessionCookieId);

    socket.on('newAction', action => {
      console.log('Emiting Action');
      socket.emit('dispachAction', action);
      console.log('Action Emited');
    });

    if (next) next();
  });
};