let arr = [1, 2, 4, 9, 10, 2, 20, 50, 8];

function arrayLarge(ar) {
  let max = 0;
  for (let i = 0; i < ar.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(arrayLarge(arr));
