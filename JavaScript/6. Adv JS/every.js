let evn = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];

console.log(
  evn.every((el) => {
    return el % 2 == 0;
  })
);
console.log(
  odd.every((el) => {
    return el % 2 == 0;
  })
);
