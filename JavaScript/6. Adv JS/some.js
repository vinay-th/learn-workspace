let num = [1, 2, 4, 6, 7];
let odd = [1, 3, 5, 7, 9];

console.log(
  num.some((el) => {
    return el % 2 == 0;
  })
);
console.log(
  odd.some((el) => {
    return el % 2 == 0;
  })
);
