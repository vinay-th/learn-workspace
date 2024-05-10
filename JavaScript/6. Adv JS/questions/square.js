let num = [1, 2, 3, 4, 5];
let square = num.map((el) => el * el);
console.log(square);
let sum = square.reduce((acc, el) => acc + el);
console.log("Average: " + sum / num.length);
