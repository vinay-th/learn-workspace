let arr = [10, 22, 30, 40];
console.log(
  arr.every((el) => {
    if (el % 10 == 0) return true;
    else return false;
  })
);
