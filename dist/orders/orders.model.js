"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrders = exports.orders = void 0;
exports.orders = [
    {
        date: 'September 15, 2021',
        subtotal: 520.17,
        items: [
            {
                product: { id: 'iphone3', description: 'Iphone 3', price: 15.12 },
                quantity: 2,
            },
        ],
    },
];
const getAllOrders = () => exports.orders;
exports.getAllOrders = getAllOrders;
