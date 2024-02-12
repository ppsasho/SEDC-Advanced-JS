let body = document.getElementsByTagName('body')[0].style.backgroundColor = '#2c5a6b';

console.log('=================== Classes and inheritance ===================');

// Old way
// function WheeledVehicle(id, name, batch, price, wheels) {

//     this.id = id,
//     this.name = name,
//     this.batch = batch,
//     this.price = price, 
//     this.wheels = wheels
// }

// Inheritance with classes
class Vehicle {
    constructor(id, name, batchNo, price) {
        this.id = id;
        this.name = name;
        this.batchNo = batchNo;
        this.price = price;
        this.company = "move.inc";
    }
	printVehicle(){
		console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
	}
}
class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
        super(id, name, batch, price);
        this.wheels = wheels
    }
    drive(){
        console.log(`${this.name} drives on ${this.wheels} wheels!`);
    }
}

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, doors, ac = false) {
        super(id, name, batch, price, 4);
        this.doors = doors,
        this.airConditioning = ac
        if(ac) {
            this.price += 400;
        }
    }
    buyCar(money){
        money > this.price ? console.log('so zdravje da si ja vozis') : console.log('Nemas dovolno monies');
    }
    static addAC(car) {
        if (!(car instanceof Car)) {
            throw new Error;
        }
        if (car.airConditioning) {
            console.log('You already got AC');
        } else {
            this.airConditioning = true;
            car.price += 400;
            console.log(`The ${car.name} now has AC installed and the price has increased to ${car.price}`);
        }
    }
}

let bike = new WheeledVehicle (1, 'Bike', '203e', 1000, 2);
console.log(bike);

const mustang = new Car(2, 'ford mustang', '305t', 40000, 5, false)
console.log(mustang);
Car.addAC(mustang);

console.log('');
console.log('===================== Get / Set =====================');

class ElectricCar extends Car {
    constructor(id, name, batch, price, doors, ac, owner) {
        super(id, name, batch, price, doors, ac);
        this.owner = owner;
    }
    get owner() {
        console.log(`The getter got the owner ${owner}`);
        return this._owner;
    }
    set owner(ownerVal) {
        console.log(`Hello from owner! Owner: ${ownerVal}`);
        this._owner = ownerVal;
    }
}

let tesla = new ElectricCar(3, 'Tesla model X', '235g', 80000, 4, true, 'AEAEAE');