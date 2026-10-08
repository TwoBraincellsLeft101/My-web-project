export default class FleetManager {
    static instance = null;

    constructor() {
        if (FleetManager.instance) {
            return FleetManager.instance;
        }

        this.vehicles = [];
        FleetManager.instance = this;
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }

    removeVehicle(id) {
        this.vehicles = this.vehicles.filter(
            vehicle => vehicle.id !== id
        );
    }

    findVehicle(id) {
        return this.vehicles.find(
            vehicle => vehicle.id === id
        );
    }

    listVehicles() {
        return this.vehicles;
    }
}