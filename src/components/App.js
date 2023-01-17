import Game from "../models/game";
import PlayerBoard from "./PlayerBoard";

const App = (() => {
  const element = document.createElement("div");
  element.id = "app";
  const newGame = document.createElement("button");
  newGame.id = "newGame";
  newGame.classList.add("btn", "btn-primary");
  newGame.textContent = "New game";
  element.appendChild(newGame);

  const boards = document.createElement("div");
  boards.id = "boards";
  boards.classList.add("boards");
  element.appendChild(boards);

  newGame.addEventListener("click", () => {
    Game.clear();
    const size = 10;
    boards.innerHTML = "";
    const playerBoard = PlayerBoard("Player", size, "player", true, false);
    const computerBoard = PlayerBoard(
      "Computer",
      size,
      "computer",
      false,
      true
    );

    boards.appendChild(playerBoard.element);
    boards.appendChild(computerBoard.element);

    Game.addPlayer(playerBoard.player);
    Game.addPlayer(computerBoard.player);
    Game.changeCurrentPlayer();
  });

  const status = document.createElement("div");
  status.id = "status";
  element.appendChild(status);

  return element;
})();

export default App;
