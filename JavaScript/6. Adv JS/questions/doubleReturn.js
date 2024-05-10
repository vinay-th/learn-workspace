const doubleReturn = (arr, ...arrgs) => [...arr, ...arrgs.map((el) => el * 2)];
console.log(doubleReturn([1, 2, 3], 4, 5));
