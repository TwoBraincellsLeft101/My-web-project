import Vehicle from "Vehicle.js";

export default class Car extends Vehicle {
  constructor(
    vehicleId,
    brand,
    model,
    year,
    dailyRate,
    seatCapacity
  ) {
    super(vehicleId, brand, model, year, dailyRate);

    this.seatCapacity = seatCapacity;
  }

  displayInfo() {
    return `${super.displayInfo()} | Seats: ${this.seatCapacity}`;
  }
}