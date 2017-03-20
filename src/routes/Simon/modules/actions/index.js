
const options = {

  offline: {
    clickPad: (pad) => {
      return {
        type: 'CLICK_PAD',
        payload: {
          pad,
        },
      };
    },

    startGame: () => {
      return {
        type: 'START_GAME',
      };
    },
  },

  online: {
    clickPadOnline: (pad) => {
      return {
        type: 'CLICK_PAD_ONLINE',
        payload: {
          pad,
        },
      };
    },
    startGameOnline: () => {
      return {
        type: 'START_GAME_ONLINE',
      };
    },
    leaveGame: () => {
      return {
        type: 'LEAVE_GAME',
      };
    },
  },
  reset: () => {
    return {
      type: 'RESET',
    };
  },
  waitPlayers: () => {
    return {
      type: 'WAIT_PLAYERS',
    };
  },
};

export default options;
