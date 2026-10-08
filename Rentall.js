export default class Rental {
    constructor(rentalId, customer, vehicle, days) {
        this.rentalId = rentalId;
        this.customer = customer;
        this.vehicle = vehicle;
        this.days = days;
    }

    calculateCost() {
        return this.vehicle.rate * this.days;
    }

    completeRental() {
        this.vehicle.returnVehicle();
    }
}
