'use strict'

const Customer = require('../models/customer');

exports.getById = async (id) => {
    const res = await Customer
        .findByPk(id, {
            attributes: ['id', 'name', 'email', 'role']
        });
    return res;
}

exports.create = async (data) => {
    await Customer
        .create(data);
}