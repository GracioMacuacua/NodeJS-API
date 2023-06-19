'use strict'

const Sequelize = require('sequelize');
const sequelize = require('../../bin/db');
const Product = require('./product');
const Order = require('./order');

/** Define a entidade Item */
const Item = sequelize.define('Item', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    product_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    },
    order_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: 'id'
        }
    }
},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

module.exports = Item;