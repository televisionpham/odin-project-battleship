import Player from "../src/models/player";

let player = null;

beforeAll(() => {
  player = Player();
});

test("can create gameboard", () => {
  player.createGameboard();
  expect(player.getGameboard()).toBeDefined();
});
