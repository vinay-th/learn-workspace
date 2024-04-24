let car = [
  "BMW",
  "Supra",
  "Mercedes",
  "Audi",
  "Porsche",
  "Ferrari",
  "Lamborghini",
  "Koenigsegg",
];
console.log(car);

let car1 = car.slice(2, 5);
console.log(car1); // ["Mercedes", "Audi", "Porsche"]

let car2 = car.slice(4, 7);
console.log(car2); // ["Ferrari", "Lamborghini"]

let car4 = car.slice(2);
console.log(car4); // ["Mercedes", "Audi", "Porsche", "Ferrari", "Lamborghini"]

let car5 = car.slice(-2);
console.log(car5); // ["Ferrari", "Lamborghini"]
