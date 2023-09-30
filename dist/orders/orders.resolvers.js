"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_model_js_1 = require("./orders.model.js");
exports.default = {
    Query: {
        orders: () => (0, orders_model_js_1.getAllOrders)(),
    },
};
