const student = {
  name: "Vinay",
  id: 223,
  age: 18,
  C: 99,
  java: 100,
  js: 99,
  getAvg() {
    let avg = (this.C + this.java + this.js) / 3;
    console.log(`Your avg is ${avg}`);
    console.log(this);
  },
};
console.log(student.getAvg());
