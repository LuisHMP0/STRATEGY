/* SEM STRATEGY
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice(discountType) {
        if (discountType === 'none') {
            return this.price;
        } else if (discountType === 'percentage') {
            return this.price * 0.9; // 10% de desconto
        } else if (discountType === 'fixed') {
            return this.price - 10; // Desconto fixo de $10
        } else {
            throw new Error('Tipo de desconto inválido');
        }
    }
}
*/

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

module.exports = Product;
