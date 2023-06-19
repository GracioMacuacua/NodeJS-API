'use strict'

const Sequelize = require('sequelize');
const sequelize = require('../../bin/db');
const Customer = require('./customer');

/** Define a entidade Order */
const Order = sequelize.define('Order', {
    number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        enum: ['created', 'done'],
        defaultValue: 'created'
    },
    customer_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id'
        }
    }
},
    {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    });

module.exports = Order;