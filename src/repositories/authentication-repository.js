'use strict'

const Customer = require('../models/customer');

exports.authenticate = async (data) => {
    const res = await Customer.findOne({
        where: {
            email: data.email,
            password: data.password
        }
    });
    return res;
}