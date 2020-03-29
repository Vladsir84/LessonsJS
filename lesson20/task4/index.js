export class Order {
    constructor(price, city, type) {
        this.id = Math.random() + '';
        this.price = price;
        this.dateCreated = null;
        this.isConfirmed = false;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
     return this.price > 1000 ? true : false
    }

    confirmOrder() {
      this.isConfirmed = true;
      this.dateCreated = new Date();
    }

    isValidType() {
       if (this.type === 'Buy' || this.type === 'Sell'){
           return true
       }
      return false; 
    }
}
