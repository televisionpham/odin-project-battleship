const Ship = (length) => {
  if (length < 1) {
    throw "length must be greater than 0";
  }

  const length = length;

  const getLength = () => {
    return length;
  };

  return {
    getLength,
  };
};

export default Ship;
