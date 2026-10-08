export default class Vehicle {
  #availabilityStatus;

  constructor(vehicleId, brand, model, year, dailyRate, availabilityStatus = "Available") {
    this.vehicleId = vehicleId;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.dailyRate = dailyRate;
    this.#availabilityStatus = availabilityStatus;
  }

  get availabilityStatus() {
    return this.#availabilityStatus;
  }

  set availabilityStatus(status) {
    this.#availabilityStatus = status;
  }

  calculateRentalCost(days) {
    return days * this.dailyRate;
  }

  displayInfo() {
    return `${this.brand} ${this.model} (${this.year}) - $${this.dailyRate}/day`;
 }
 
}
