'use strict'

const Sequelize = require('sequelize');
const sequelize = require('../../bin/db');

const Product = sequelize.define('Product', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

module.exports = Product;