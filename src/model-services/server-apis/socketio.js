import io from 'socket.io-client';

export const authSocket = io('/session');
export const clientConfigSocket = io('/clientConfig');
export const ticTacToeSocket = io('/ticTacToe');
export const simonSocket = io('/Simon');
export const chessSocket = io('/Chess');
