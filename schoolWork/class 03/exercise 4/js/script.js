let students = [];
let currentYear = 2024;

function createStudents(firstName, lastName, birthYear, academy, grades) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.birthYear = birthYear),
    (this.academy = academy),
    (this.grades = grades),
    (this.getAge = function () {
      return `The student is ${currentYear - this.birthYear} years old`;
    });
  this.getInfo = function () {
    return `This is a student ${this.firstName} ${this.lastName} from ${this.academy}!`;
  };
  this.getGradesAvarage = function () {
    let sum = 0;
    for (let grade of this.grades) {
      sum += grade;
    }
    sum = sum / this.grades.length;
    return sum;
  };
}

for (let i = 0; i < 3; i++) {}
