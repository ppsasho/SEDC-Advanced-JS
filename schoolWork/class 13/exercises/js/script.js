class Academy {
    constructor(name, students, subjects, start, end) {
        this.name = name,
        this.students = students,
        this.subjects = subjects,
        this.start = start,
        this.end = end,
        this.numberOfClasses = subjects.length * 10;
    }
    printStudents() {
        if(!this.students) {
            this.students.foreach(student => console.log(student));
        }
    }
    printSubjects() {
        if(!this.subjects) {
            this.subjects.foreach(subject => console.log(subject));
        }
    }
}

let place = new Academy('Cool', ['stud1', 'stud2', 'stud3'], ['html', 'css', 'js', 'c#'], '10/08', '10/10')

class Subject {
    constructor(title, isElective, academy, students) {
        this.title = title,
        this.numberOfClasses = 10,
        this.isElective = isElective,
        this.academy = academy,
        this.students = students
    }
    overrideClasses(classesNum) {
        if (!(num > 3)) {
            console.log('Number is too low!');
            return;
        }
        this.numberOfClasses = classesNum;
    }
}

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.completedSubjects = [],
        this.academy = null,
        this.currentSubject = null
    }
    startAcademy(academyObj) {
        if(academyObj instanceof Academy) {
            this.academy = academyObj;
            academyObj.students.push(this);
        }
    }
    startSubject(subjectObj) {
        if(subjectObj instanceof Subject) {
            this.currentSubject = subjectObj;
        }
    }
}

