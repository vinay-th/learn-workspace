// constuctors in OOPS

// class student {
//   constructor(name, age, marks) {
//     this.name = name;
//     this.age = age;
//     this.marks = marks;
//   }
//   talk() {
//     console.log(`Hi! My name is ${this.name}`);
//   }
// }

// let stu1 = student("vinay", 19, 88);

// class teacher {
//   constructor(name, age, subject) {
//     this.name = name;
//     this.age = age;
//     this.subject = subject;
//   }
//   talk() {
//     console.log(`Hi! My name is ${this.name}`);
//   }
// }

// there is repetition
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi! this is ${this.name}`);
  }
}

class student extends person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}

let stu1 = new student("vinay", 19, 88);

class teacher extends person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}
