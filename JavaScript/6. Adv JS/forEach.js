// normal function in variable
let num = [1, 2, 3, 4, 5];
// let print = function (a) {
//   console.log(a);
// };

// arrow function in a variable
let print = (a) => {
  console.log(a);
};
console.log(num.forEach(print));
