import Vehicle from "Vehicle.js";

export default class Van extends Vehicle {
  constructor(
    vehicleId,
    brand,
    model,
    year,
    dailyRate,
    cargoCapacity
  ) {
    super(vehicleId, brand, model, year, dailyRate);

    this.cargoCapacity = cargoCapacity;
  }

  displayInfo() {
    return `${super.displayInfo()} | Cargo: ${this.cargoCapacity}kg`;
  }
}
