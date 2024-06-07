class NoDiscount {
    getDiscountedPrice(price) {
        return price;
    }

    toJSON() {
        return 'NoDiscount';
    }
}

module.exports = NoDiscount;
