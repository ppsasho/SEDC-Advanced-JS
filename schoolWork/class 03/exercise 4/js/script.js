  let currentYear = 2024;

function createStudents(firstName, lastName, birthYear, academy, grades) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.birthYear = birthYear),
    (this.academy = academy),
    (this.grades = grades),
    (this.getAge = function () {
      return `The student is ${(currentYear - this.birthYear)} years old`;
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

function create3Students() {
  let students = [];
  for (let i = 0; i < 3; i++) {
    let firstName = prompt('Enter your first name');
    let lastName = prompt('Enter your last name');
    let birthYear = prompt('Enter your birth year');
    let academy = prompt('Enter your academy');
    let grade1 = prompt('Enter your first grade');
    let grade2 = prompt('Enter your second grade');
    let grade3 = prompt('Enter your third grade');
    let grade4 = prompt('Enter your fourth grade');
    let grade5 = prompt('Enter your fifth grade');
    let grades = [grade1, grade2, grade3, grade4, grade5];
    let student = createStudents(firstName, lastName, birthYear, academy, grades);
    students.push(student);
    console.log(student);
  }
  return 'students created successfully!';
}

let btn = document.querySelector('button').addEventListener('click', function() {
  create3Students();
})
