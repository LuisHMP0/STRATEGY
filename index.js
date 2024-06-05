class Product {
    constructor(name, price, discountStrategy) {
        this.name = name;
        this.price = price;
        this.discountStrategy = discountStrategy;
    }

    setDiscountStrategy(discountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    getPrice() {
        return this.discountStrategy.apply(this.price);
    }
}

class NoDiscount {
    apply(price) {
        return price;
    }
}

class PercentageDiscount {
    apply(price) {
        return price * 0.9; // 10% de desconto
    }
}

class FixedDiscount {
    apply(price) {
        return price - 10; // Desconto fixo de $10
    }
}

// Uso
const noDiscount = new NoDiscount();
const percentageDiscount = new PercentageDiscount();
const fixedDiscount = new FixedDiscount();

const product = new Product('Camisa', 100, noDiscount);
console.log(product.getPrice()); // 100

product.setDiscountStrategy(percentageDiscount);
console.log(product.getPrice()); // 90

product.setDiscountStrategy(fixedDiscount);
console.log(product.getPrice()); // 90