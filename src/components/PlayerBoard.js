import Game from "../models/game";
import Player from "../models/player";

const PlayerBoard = (name, size, id, showShips = true, autoPlay = false) => {
  const player = Player(id, autoPlay);
  player.createGameboard(size);
  const board = player.getGameboard().getBoard();

  const element = document.createElement("div");

  const nameElement = document.createElement("div");
  nameElement.classList.add("player-name");
  nameElement.textContent = name;
  element.appendChild(nameElement);

  const boardElement = document.createElement("div");
  boardElement.id = id;
  boardElement.classList.add("gameboard");
  element.appendChild(boardElement);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.id = `${id}_${i}_${j}`;
      cell.classList.add("cell");

      if (board[i][j] > 0 && showShips) {
        cell.classList.add("cell-safe");
      } else if (board[i][j] < 0) {
        cell.classList.add("cell-hit");
      }

      if (id === "computer") {
        cell.addEventListener("click", () => {
          if (Game.isGameOver()) {
            return;
          }

          if (!player.getMyTurn()) {
            if (player.receiveAttack(i, j) === true) {
              cell.classList.add("cell-hit");
            } else {
              cell.classList.add("cell-miss");
            }

            Game.changeCurrentPlayer();
          }
        });
      }

      boardElement.appendChild(cell);
    }
  }

  return { element, player };
};

export default PlayerBoard;
