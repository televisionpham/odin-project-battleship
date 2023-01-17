import Gameboard from "./gameboard";
import Ship from "./ship";

const Player = (id, autoPlay = false) => {
  const _id = id;
  const _autoPlay = autoPlay;
  let _gameboard = null;
  const _opponentBoard = [];
  let _myTurn = false;

  const getId = () => {
    return _id;
  };

  const getAutoPlay = () => {
    return _autoPlay;
  };

  const getMyTurn = () => {
    return _myTurn;
  };

  const setMyTurn = (value) => {
    _myTurn = value;
  };

  const createGameboard = (size) => {
    for (let i = 0; i < size; i++) {
      const r = [];
      _opponentBoard.push(r);
      for (let j = 0; j < size; j++) {
        r.push(false);
      }
    }

    _gameboard = Gameboard(size);

    // randomly place ships on the board
    let count = 0;
    const numberOfShips = 5;
    let shipLength = 5;
    while (count <= numberOfShips) {
      let row = Math.floor(Math.random() * numberOfShips);
      let col = Math.floor(Math.random() * numberOfShips);
      const ship = Ship(shipLength);
      if (_gameboard.canPlaceShip(ship, row, col)) {
        _gameboard.placeShip(ship, row, col);

        if (shipLength >= 3) {
          shipLength -= 1;
        }

        count += 1;
      }
    }
  };

  const getGameboard = () => {
    return _gameboard;
  };

  const receiveAttack = (row, col) => {
    const hit = _gameboard.receiveAttack(row, col);
    const cell = document.getElementById(`${_id}_${row}_${col}`);
    if (hit) {
      cell.classList.add("cell-hit");
    } else {
      cell.classList.add("cell-miss");
    }
    return hit;
  };

  const canAttack = (row, col) => {
    return !_opponentBoard[row][col];
  };

  const attack = (player, row, col) => {
    return player.receiveAttack(row, col);
  };

  return {
    getId,
    getAutoPlay,
    getMyTurn,
    setMyTurn,
    createGameboard,
    getGameboard,
    canAttack,
    attack,
    receiveAttack,
  };
};

export default Player;
