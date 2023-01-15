const Gameboard = (size) => {
  const _size = size;
  const _board = [];
  const _ships = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    _board.push(row);
    for (let j = 0; j < size; j++) {
      row.push(null);
    }
  }

  const getBoard = () => {
    return _board;
  };

  const canPlaceShip = (ship, row, col) => {
    if (row < 0 || col < 0 || row >= _size || col >= _size) {
      return false;
    }

    if (row + ship.getLength() >= _size) {
      return false;
    }

    for (let i = 0; i < ship.getLength(); i++) {
      if (_board[row][col + i] != null) {
        return false;
      }
    }

    return true;
  };

  const placeShip = (ship, row, col) => {
    ship.setCoord(row, col);
    for (let i = 0; i < ship.getLength(); i++) {
      _board[row][col + i] = 1;
    }

    _ships.push(ship);
  };

  const receiveAttack = (row, col) => {
    for (const ship of _ships) {
      if (ship.hit(row, col)) {
        _board[row][col] = -1 * _board[row][col];
        return true;
      }
    }

    return false;
  };

  const allShipsSunk = () => {
    return _ships.every((s) => s.isSunk());
  };

  return {
    getBoard,
    receiveAttack,
    canPlaceShip,
    placeShip,
    allShipsSunk,
  };
};

export default Gameboard;
