U59555732
// Define the Car class
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // Method to accelerate the car's speed by a given value
    accelerate(value) {
        this.speed += value;
        console.log(`${this.make} accelerated. New speed: ${this.speed} km/h`);
    }

    // Method to brake the car's speed by a given value
    brake(value) {
        this.speed -= value;
        console.log(`${this.make} slowed down. New speed: ${this.speed} km/h`);
    }
}

// Define the EV class extending the Car class
class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    // Method to charge the battery to a specified level
    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`${this.make} battery charged to ${this.charge}%`);
    }

    // Override accelerate method to adjust speed and battery charge
    accelerate() {
        super.accelerate(20); // Increase speed by 20 km/h
        this.charge -= 1; // Decrease battery charge by 1%
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

// Test Data
const tesla = new EV('Tesla', 120, 23);

// Test accelerate, brake, and chargeBattery methods
console.log("Initial State:");
console.log(`${tesla.make} speed: ${tesla.speed} km/h, charge: ${tesla.charge}%`);

console.log("\nAccelerating and Charging:");
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(50);

console.log("\nBraking:");
tesla.brake(10);
