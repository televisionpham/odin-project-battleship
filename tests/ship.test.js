import Ship from "../src/models/ship";

let ship = null;

beforeEach(() => {
  ship = Ship(5);
  ship.setCoord(0, 0);
});

test("should throw error create a battleship with length < 1", () => {
  const t = () => {
    const s = Ship();
  };
  expect(t).toThrow("length must be greater than 0");
});

test("should throw error create a battleship with length > 5", () => {
  const t = () => {
    const s = Ship(6);
  };
  expect(t).toThrow("length must be less than 5");
});

test("should get length of valid ship", () => {
  const length = 4;
  const s = Ship(length);
  expect(s.getLength()).toBe(length);
});

test("when ship get hit, should increase the number of hits", () => {
  const currentHits = ship.getHits();
  ship.hit(0, 0);
  expect(ship.getHits()).toBe(currentHits + 1);
});

test("when ship get hit length times, should be sunk", () => {
  expect(ship.isSunk()).toBe(false);
  for (let i = 0; i < ship.getLength(); i++) {
    ship.hit(0, i);
  }

  expect(ship.isSunk()).toBe(true);
});
