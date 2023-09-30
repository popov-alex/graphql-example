"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = require("./products.model");
exports.default = {
    Query: {
        products: () => (0, products_model_1.getAllProducts)(),
    },
};
