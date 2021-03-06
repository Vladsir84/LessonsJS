export class Order {
    constructor(price, city, type) {
        this.id = Math.random() + '';
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.price = price;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        return this.price > 1000 ? true : false;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }

    isValidType() {
        if (this.type === "Buy" || this.type === "Sell") {
            return true;
        } 
        return false;
    }
}
