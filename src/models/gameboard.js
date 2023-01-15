const Gameboard = (size) => {
  const _size = size;
  const _board = Array(size).fill(Array(size).fill(null));
  const _ships = [];

  const placeShip = (ship, x, y) => {
    if (x < 0 || y < 0 || x >= _size || y >= _size) {
      throw new Error("invalid coordination");
    }

    if (x + ship.getLength() >= _size) {
      throw new Error("invalid coordination");
    }

    _ships.push(ship);
  };

  const receiveAttack = (x, y) => {
    const ship = _ships.filter(s => s._board)    
  };

  return {
    receiveAttack,
    placeShip,
  };
};

export default Gameboard;
