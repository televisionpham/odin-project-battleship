import Gameboard from "../src/models/gameboard";
import Ship from "../src/models/ship";

let gameboard = null;

beforeEach(() => {
  gameboard = Gameboard(4);
});

test("can place valid ship at valid place", () => {
  const ship = Ship(2);
  gameboard.placeShip(ship, 0, 0);
  expect(gameboard.getBoard()).toEqual([
    [1, 1, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);
});

test("should return valid result when receive attack", () => {
  const ship = Ship(2);
  gameboard.placeShip(ship, 0, 0);
  expect(gameboard.receiveAttack(0, 0)).toBe(true);
  expect(gameboard.receiveAttack(1, 0)).toBe(false);
});

test("when all ships sunk, should return true", () => {
  const ship = Ship(1);
  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(0,0)
  expect(gameboard.allShipsSunk()).toBe(true);
})