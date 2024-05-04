let marks = [
  {
    name: "Vinay",
    marks: 98,
  },
  {
    name: "Niomi",
    marks: 98,
  },
  {
    name: "Vansh",
    marks: 88,
  },
];
let gpa = marks.map(function (el) {
  return el.marks / 10;
});
console.log(gpa);
