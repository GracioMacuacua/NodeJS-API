'use strict'

const Sequelize = require('sequelize');
const sequelize = require('../../bin/db');

/** Define a entidade Customer */
const Customer = sequelize.define('Customer', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['user', 'admin'],
        defaultValue: 'user'
    }
},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

module.exports = Customer;