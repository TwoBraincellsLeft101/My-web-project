export default class Customer {
    constructor(customerId, name, phone, email) {
        this.customerId = customerId;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    getDetails() {
        return `
        ID: ${this.customerId}
        Name: ${this.name}
        Phone: ${this.phone}
        Email: ${this.email}
        `;
    }
}