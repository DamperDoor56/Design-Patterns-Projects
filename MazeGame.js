/**
 * @abstract
 */

class MapSite {
    enter(){
        throw new Error('Not defined in subclass');
    }
}

/**
 * @extends MapSite
 */

class Wall extends MapSite {
    enter(){
        console.log('Ouch! You bump into a Wall');
    }
}

/**
 * @extends MapSite
 */
class Room extends MapSite {
    constructor(roomNumber) {
        super();
        this.sides = {
            north: null,
            south: null, 
            east: null, 
            west: null
        }
        this.roomNumber = roomNumber;
    }
    getSide(direction) {
        return this.sides[direction]
    }
    setSide(direction, mapSide) {
        this.sides[direction] = mapSide;
    }
    enter() {
        console.log(`You are in the room: ${this.roomNumber}`)
    }
}

/**
 * @extends MapSite
 */

class Door extends MapSite {
    constructor(roomOne, roomTwo) {
        super();
        this.roomOne = roomOne;
        this.roomTwo = roomTwo;
        this.isOpen = false;
    }
    enter(currentRoom) {
        if(this.isOpen) {
            const room = this.getNextRoom(currentRoom);
            room.enter();
        }
        else {
            console.log('Auch! You bumped your node on the door')
        }
    }
    open(){
        console.log('You opened the room')
        this.isOpen = true;
    }
    getNextRoom(currentRoom){
        let nextRoom = null;
        if(this.roomOne.roomNumber === currentRoom){
            nextRoom = this.roomTwo;
        } else if(this.roomTwo === currentRoom){
            nextRoom = this.roomOne;
        }
        return nextRoom;
    }
}

class Maze {
    constructor(){
        this.rooms = [];
    }
    addRoom(room){
        this.rooms.push(room);
    } 
    getRoom(roomNumber){
        return this.rooms.find((room) => 
        (room.roomNumber = roomNumber))
    }
}

class MazeGame {
    constructor(){
        this.currentRoom = null;
    }
    tryDirection(direction, action) {
        const targetDir = this.currentRoom.getSide(direction);
        if(action){
            console.log(`--- making action: ${action} on direction: ${direction}`);
            if(action === 'open' && targetDir instanceof Door){
                targetDir.open();
            } else {
                console.log("You can't open that")
            }
            return;
        }
        console.log(`Trying to go to ${direction}`);
        const newRoom = targetDir.enter(this.currentRoom.roomNumber);
        if(newRoom) {
            this.currentRoom = newRoom;
        }
    }
        getCurrentRoom() {
            this.currentRoom.enter();
            return this.currentRoom;
        }
        createMaze() {
            const aMaze = new Maze();
            const r1 = new Room(1);
            const r2 = new Room(2);
            const door = new Door(r1, r2);

            aMaze.addRoom(r1);
            aMaze.addRoom(r2);
            
            r1.setSide('north', new Wall());
            r1.setSide('east', door);
            r1.setSide('south', new Wall());
            r1.setSide('west', new Wall());

            r2.setSide('north', new Wall());
            r2.setSide('east', new Wall());
            r2.setSide('south', new Wall());
            r2.setSide('west', door);
            this.currentRoom = r1;
            return aMaze;
        }
    }

    console.log('Game is beginning');
    const game = new MazeGame();
    const maze = game.createMaze();

    game.getCurrentRoom();
    game.tryDirection('north');
    game.tryDirection('east');
    game.tryDirection('sotuth', 'open');
    game.tryDirection('east', 'open');
    game.tryDirection('east');
    game.tryDirection('west');
    
