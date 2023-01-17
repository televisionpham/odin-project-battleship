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
    const size = 10;
    boards.innerHTML = "";
    const playerBoard = PlayerBoard("Player", size, "player");
    const computerBoard = PlayerBoard("Computer", size, "computer");
    boards.appendChild(playerBoard);
    boards.appendChild(computerBoard);
  });

  return element;
})();

export default App;
