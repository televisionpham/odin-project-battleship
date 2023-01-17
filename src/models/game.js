const Game = (() => {
  let players = [];
  let current = -1;
  let gameOver = false;

  const addPlayer = (player) => {
    players.push(player);
  };

  const clear = () => {
    players = [];
    current = -1;
  };

  const getCurrentPlayer = () => {
    return players[current];
  };

  const changeCurrentPlayer = () => {
    if (gameOver) {
      return;
    }

    current += 1;
    if (current >= players.length || current < 0) {
      current = 0;
    }

    let next = current + 1;
    if (next >= players.length) {
      next = 0;
    }

    const currentPlayer = players[current];
    currentPlayer.setMyTurn(true);
    const nextPlayer = players[next];
    nextPlayer.setMyTurn(false);

    if (currentPlayer.getAutoPlay()) {
      const size = currentPlayer.getGameboard().getBoard().length;
      while (currentPlayer.getAutoPlay()) {
        let row = Math.floor(Math.random() * size);
        let col = Math.floor(Math.random() * size);
        if (currentPlayer.canAttack(row, col)) {
          currentPlayer.attack(nextPlayer, row, col);
          currentPlayer.setMyTurn(false);
          current = 0;
          break;
        }
      }
    }

    for (const player of players) {
      if (player.getGameboard().allShipsSunk()) {
        gameOver = true;
        const status = document.getElementById("status");
        status.textContent = "Game over";
        break;
      }
    }
  };

  const isGameOver = () => {
    return gameOver;
  };

  return {
    getCurrentPlayer,
    addPlayer,
    clear,
    changeCurrentPlayer,
    isGameOver,
  };
})();

export default Game;
