var arr = [1, 2, 3, 4];
let max = -1;
// for (let i = 0; i < arr.length; i++) {
//     if(max < arr[i])
//         max = arr[i];
// }

max = arr.reduce((res, el) => {
  if (res < el) return el;
  else return res;
});
console.log(max);
