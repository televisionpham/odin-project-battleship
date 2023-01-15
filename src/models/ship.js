const Ship = (length) => {
  if (!length || length < 1) {
    throw "length must be greater than 0";
  }

  if (length > 5) {
    throw "length must be less than 5";
  }

  const _length = length;
  let _hits = 0;

  const getLength = () => {
    return _length;
  };

  const hit = () => {
    if (_hits < _length) {
      _hits += 1;
    }
  };

  const getHits = () => {
    return _hits;
  };

  const isSunk = () => {
    return _hits === _length;
  };

  return {
    getLength,
    hit,
    getHits,
    isSunk,
  };
};

export default Ship;
