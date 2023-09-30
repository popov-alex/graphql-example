"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.products = void 0;
exports.products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 15.12,
    },
    {
        id: 'iphone3',
        description: 'Iphone 3',
        price: 505.5,
    },
];
const getAllProducts = () => exports.products;
exports.getAllProducts = getAllProducts;
