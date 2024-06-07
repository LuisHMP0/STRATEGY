class FixedDiscount {
    constructor(amount) {
        this.amount = amount;
    }

    getDiscountedPrice(price) {
        return price - this.amount;
    }

    toJSON() {
        return `FixedDiscount ($${this.amount})`;
    }
}

module.exports = FixedDiscount;
