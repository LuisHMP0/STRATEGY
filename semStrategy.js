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

// Uso
const product = new Product('Camisa', 100);
console.log(product.getPrice('none')); // 100
console.log(product.getPrice('percentage')); // 90
console.log(product.getPrice('fixed')); // 90
