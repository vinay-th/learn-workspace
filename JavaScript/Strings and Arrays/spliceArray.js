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

let cutCar = car.splice(0, 3, "Toyota", "Honda", "Nissan");
console.log(cutCar);
console.log(car);
