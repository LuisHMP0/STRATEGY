class FixedDiscount {
    apply(price) {
        return price - 10; // Desconto fixo de $10
    }
}

module.exports = FixedDiscount;
