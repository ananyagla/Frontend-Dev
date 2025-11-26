function Person(name) {
    this.name = name;
}

Person.prototype.printName = function () {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
    console.log("Branch:", this.branch);
};

let stu = new Student("Ananya", "Computer Science");
stu.printName();
stu.printBranch();

console.log(stu instanceof Student);
console.log(stu instanceof Person);
