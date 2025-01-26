// Product Class
class Product {
    constructor(name, price, type, condition, image) {
        this.id = Date.now();
        this.name = name;
        this.price = price;
        this.type = type;
        this.condition = condition;
        this.image = image;
    }
}

// Application State
class ThriftMarketPlace {
    constructor() {
        this.products;
    }
}
