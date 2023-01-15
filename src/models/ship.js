const Ship = (length) => {
  if (!length || length < 1) {
    throw "length must be greater than 0";
  }

  if (length > 5) {
    throw "length must be less than 5";
  }

  const _length = length;
  const _structure = Array(_length).fill(false);
  let _hits = 0;
  let _row = -1;
  let _col = -1;

  const getLength = () => {
    return _length;
  };

  const hit = (row, col) => {
    if (row !== _row) {
      return false;
    }

    const i = col - _col;

    if (i >= 0) {
      if (!_structure[i]) {
        _structure[i] = true;
        if (_hits < _length) {
          _hits += 1;
        }
      }

      return true;
    }

    return false;
  };

  const getHits = () => {
    return _hits;
  };

  const isSunk = () => {
    return _hits === _length;
  };

  const setCoord = (row, col) => {
    _row = row;
    _col = col;
  };

  return {
    getLength,
    hit,
    getHits,
    isSunk,
    setCoord,
  };
};

export default Ship;
