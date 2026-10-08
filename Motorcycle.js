import Vehicle from "Vehicle.js";

export default class Motorcycle extends Vehicle {
  constructor(
    vehicleId,
    brand,
    model,
    year,
    dailyRate,
    engineCapacity
  ) {
    super(vehicleId, brand, model, year, dailyRate);

    this.engineCapacity = engineCapacity;
  }

  displayInfo() {
    return `${super.displayInfo()} | Engine: ${this.engineCapacity}cc`;
  }
}