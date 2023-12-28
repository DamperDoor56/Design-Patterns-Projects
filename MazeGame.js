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