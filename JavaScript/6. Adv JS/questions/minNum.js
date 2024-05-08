let arr = [1, 2, 3, 4];
console.log(
  arr.reduce((min, el) => {
    if (min < el) return min;
    else return el;
  })
);
