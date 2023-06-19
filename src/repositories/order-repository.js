'use strict'

const Order = require('../models/order');

exports.get = async () => {
    const res = await Order
        .findAll();
    return res;
}

exports.create = async (data) => {
    await Order
        .create(data);
}