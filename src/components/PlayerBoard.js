import Player from "../models/player";

const PlayerBoard = (name, size, id) => {
  const player = Player();
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

      if (board[i][j] > 0) {
        cell.classList.add("cell-safe");
      } else if (board[i][j] < 0) {
        cell.classList.add("cell-hit");
      }

      cell.addEventListener("click", () => {
        if (player.receiveAttack(i, j) === true) {
          cell.classList.add("cell-hit");
        }
      });

      boardElement.appendChild(cell);
    }
  }

  return element;
};

export default PlayerBoard;
