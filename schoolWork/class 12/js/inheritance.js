// Inheritance
console.clear();
function Person(id, firstName, lastName, age) {
    this.id = id,
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age

    this.getFullName = function() {
        return`${this.firstName} ${this.lastName}`;
    }
}

let person1 = new Person(1, 'Someone', 'Nikolovski', 21);

function Employee(id, first, last, age, division) {
    Object.setPrototypeOf(this, new Person
        (id, first, last, age));
    this.division = division;
    this.work = function() {
        console.log(`Employee ${this.firstName} works very dilligently in ${division}`);
    }
}

let employee1 = new Employee('1', 'Betty', 'Rowling', 42, 'HR');

let employee2 = new Employee('2', 'Jack', 'Devins', 23, 'a rly good division');

function Manager (id, first, last, age, division, team) {
    Object.setPrototypeOf(this, new Employee(id, first, last, age, division));
    this.team = team
    
    this.assignTask = function(task) {
        console.log(`${this.getFullName()} assigned a task: ${task} to ${this.team}`);
    }
}

let manager = new Manager('0', 'Davor', 'Puzhovski', 34, 'Development', 'code sprinters');

manager.assignTask('WORK MORE');