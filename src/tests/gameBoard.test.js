import { Gameboard } from "../gameboard";

let playersBoard = Gameboard();
let enemysBoard = Gameboard();


test('Place Ship Vertically on Board', () => {
    const testShip = playersBoard.ships.cruiser;

    playersBoard.placeShip(testShip, "D1", "Y");

    expect(_.includes(playersBoard.shipOccupiedCoords, "F3")).toBeFalsy();
    expect(_.every(["D1", "D2", "D3"], (el) => _.includes(playersBoard.shipOccupiedCoords, el))).toBeTruthy();
    expect(_.every(["D1", "D2", "D3", "D4"], (el) => _.includes(playersBoard.shipOccupiedCoords, el))).toBeFalsy();
    expect(testShip.occupying).toEqual(["D1", "D2", "D3"])

})

test('Place Ship Horizontaly on Board', () => {
    const testShip = playersBoard.ships.cruiser;

    playersBoard.placeShip(testShip, "A1", "X");

    expect(_.includes(playersBoard.shipOccupiedCoords, "F3")).toBeFalsy();
    expect(_.every(["A1", "B1", "C1"], (el) => _.includes(playersBoard.shipOccupiedCoords, el))).toBeTruthy();
})


test('Enemy Hits a ship', () => {
    const game = Gameboard();
    const testShip = game.ships.cruiser;
    game.placeShip(testShip, "D1", "Y");
    game.receiveAttack("D3");//hit
    game.receiveAttack("F1")//miss


    expect(_.includes(game.hitAttacks, "D3")).toBeTruthy();
    expect(_.includes(game.missedAttacks, "D3")).toBeFalsy();
    expect(testShip.hits).toEqual(1);

    expect(game.allAttacksMade.length).toBe(2);

})

test('Enemy Misses a ship', () => {
    let game = Gameboard();

    const testShip = game.ships.cruiser;
    game.placeShip(testShip, "D1", "Y");
    game.receiveAttack("A2")

    expect(_.includes(game.missedAttacks, "A2")).toBeTruthy();
    expect(_.includes(game.hitAttacks, "D1")).toBeFalsy();
    expect(_.includes(game.hitAttacks, "D2")).toBeFalsy();
    expect(_.includes(game.hitAttacks, "D3")).toBeFalsy();
})


test('All ships are sunken', () => {
    let game = Gameboard();
    game.placeShip(game.ships.carrier, "A1", "Y");
    game.placeShip(game.ships.battleship, "B1", "Y");
    game.placeShip(game.ships.cruiser, "C1", "Y");
    game.placeShip(game.ships.destroyer, "D1", "Y");
    game.placeShip(game.ships.submarine, "E1", "Y");

    let ships = [];
    let occupiedCoords = []
    _.forEach(game.ships, (el) => ships.push(el));
    _.forEach(ships, (name) => _.forEach(name.occupying, (coords) => occupiedCoords.push(coords)));
    _.forEach(occupiedCoords, (coord) => game.receiveAttack(coord));

    expect(game.allShipsSunk()).toBeTruthy();
})


test('Missed attacks', () => {
    let game = Gameboard()
    const testShip = game.ships.cruiser;
    game.placeShip(testShip, "D1", "Y");
    game.receiveAttack("F7");
    game.receiveAttack("C10");
    game.receiveAttack("D2");
    game.receiveAttack("D3");

    expect(game.missedAttacks).toEqual(["F7", "C10"]);

})

test('Hit attacks', () => {
    let game = Gameboard()
    const testShip = game.ships.cruiser;
    game.placeShip(testShip, "D1", "Y");
    game.receiveAttack("D2");
    game.receiveAttack("D3");
    game.receiveAttack("F7");
    game.receiveAttack("C10")

    expect(game.hitAttacks).toEqual(["D2", "D3"]);
})

test('Ships overlap', () => {
    let game = Gameboard();
    const carrier = game.ships.carrier;
    const battleship = game.ships.battleship;

    game.placeShip(carrier, "C1", "Y");
    expect(game.placeShip(battleship, "B3", "X")).toBeFalsy();
    expect(game.shipOccupiedCoords).toEqual(["C1", "C2", "C3", "C4", "C5"]);
})

test('Ships hanging off the board', () => {
    let game = Gameboard();
    const carrier = game.ships.carrier;

    expect(game.placeShip(carrier, "E7", "Y")).toBeFalsy();
    expect(game.placeShip(carrier, "E10", "Y")).toBeFalsy();
    expect(game.placeShip(carrier, "J10", "X")).toBeFalsy();
})


test('Horizontally Add Ship on row 10', () => {
    let game = Gameboard();
    const testShip = game.ships.cruiser;
    const testShipTwo = game.ships.battleship;

    game.placeShip(testShip, "H10", "X");
    expect(game.placeShip(testShipTwo, "F10", "X")).toBeFalsy();
    expect(game.shipOccupiedCoords).toEqual(["H10", "I10", "J10"])
})