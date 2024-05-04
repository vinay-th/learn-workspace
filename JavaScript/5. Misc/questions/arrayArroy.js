let n = [1, 2, 3, 4, 5];
let avgArr = (a) => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum / a.length;
};
console.log(avgArr(n));
