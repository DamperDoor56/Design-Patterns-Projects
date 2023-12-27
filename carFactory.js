/**
 * Define vehicle
 * @abstract
 */

class Vehicle {
    constructor(){
        if(this.constructor === Vehicle)
        throw new Error('FYI: Instance of abstract class cannot be instansiated')
    }
    turnOn() {
        throw new Error('FYI: Instance of Abstract cannot be initiated');
    }
}
/**
 * @extends Vehicle
 */

class Car extends Vehicle {
    constructor(){
        super();
        this.name = 'Car';
        this.wheels = 4
    }
    turnOn() {
        console.log('rum rum')
    }

}

/**
 * @extends
 */
class Truck extends Vehicle {
    constructor(){
        super();
        this.name = 'Truck';
        this.wheels = 8
    }
    turnOn() {
        console.log('PIIIII PIII')
    }
}

/**
 * @extends
 */
class Motorcycle extends Vehicle {
    constructor(){
        super();
        this.name = 'Motorcycle';
        this.wheels = 2
    }
    turnOn() {
        console.log('RRRRRMMMMMMM')
    }
}

const vehicleFactory = {
    createVehicle: function(type) {
        switch(type) {
            case 'car':
                return new Car();
            case 'truck':
                return new Truck()
            case 'motorcycle':
                return new Motorcycle();
        }

    }
}

const car = vehicleFactory.createVehicle('car')
const truck = vehicleFactory.createVehicle('truck')
const motorcycle = vehicleFactory.createVehicle('motorcycle')

car.turnOn()
truck.turnOn()
motorcycle.turnOn()