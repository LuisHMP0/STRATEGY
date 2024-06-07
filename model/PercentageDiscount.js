class PercentageDiscount {
    constructor(percentage) {
        this.percentage = percentage;
    }

    getDiscountedPrice(price) {
        return price - (price * this.percentage / 100);
    }

    toJSON() {
        return `PercentageDiscount (${this.percentage}%)`;
    }
}

module.exports = PercentageDiscount;
