function randomNum(start, end) {
  let diff = end - start;
  let num = parseInt(Math.floor(Math.random() * diff) + start);
  return num;
}
let x = randomNum(5, 10);
console.log(x);
