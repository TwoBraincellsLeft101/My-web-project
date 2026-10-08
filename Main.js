import Car from "./models/Car.js";
import Motorcycle from "./models/Motorcycle.js";
import Van from "./models/Van.js";

const car = new Car(
  "C001",
  "Toyota",
  "Corolla",
  2024,
  100,
  5
);

const motorcycle = new Motorcycle(
  "M001",
  "Honda",
  "CBR",
  2023,
  50,
  600
);

const van = new Van(
  "V001",
  "Ford",
  "Transit",
  2022,
  120,
  1500
);

console.log(car.displayInfo());
console.log(motorcycle.displayInfo());
console.log(van.displayInfo());

console.log(car.calculateRentalCost(3));