let a = 4;
function sumFromN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
let x = sumFromN(a);
console.log(x);
