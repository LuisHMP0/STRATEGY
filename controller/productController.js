const Product = require('./../model/Product');
const NoDiscount = require('./../model/NoDiscount');
const PercentageDiscount = require('./../model/PercentageDiscount');
const FixedDiscount = require('./../model/FixedDiscount');

// Criar alguns produtos como exemplo
let products = [
    new Product('Camisa', 100, new NoDiscount()),
    new Product('Calça', 150, new PercentageDiscount()),
    new Product('Jaqueta', 200, new FixedDiscount())
];

const getProducts = (req, res) => {
    res.json(products);
};

const getProductById = (req, res) => {
    const product = products[req.params.id];
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
};

const updateProductDiscount = (req, res) => {
    const product = products[req.params.id];
    const { discountType } = req.body;

    if (product) {
        switch (discountType) {
            case 'no':
                product.setDiscountStrategy(new NoDiscount());
                break;
            case 'percentage':
                product.setDiscountStrategy(new PercentageDiscount());
                break;
            case 'fixed':
                product.setDiscountStrategy(new FixedDiscount());
                break;
            default:
                return res.status(400).send('Invalid discount type');
        }
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
};

module.exports = {
    getProducts,
    getProductById,
    updateProductDiscount
};
