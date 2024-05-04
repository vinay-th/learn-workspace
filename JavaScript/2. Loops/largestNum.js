let a = [1, 2, 3, 4, 7, 9, 0, 5];
let larNum = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] > larNum) {
    larNum = a[i];
  }
}
console.log("Largest num is: " + larNum);
