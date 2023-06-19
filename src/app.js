'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const database = require('../bin/db');
const authService = require('./services/auth-service');

//Carregamento dos modelos
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');
const Item = require('./models/item');

//Cria as tabelas na base de dados
database.sync();

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');
const authenticationRoute = require('./routes/authentication-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRoute);
app.use('/products', authService.authorize, productRoute);
app.use('/customers', customerRoute);
app.use('/orders', authService.authorize, orderRoute);
app.use('/auth', authenticationRoute);

module.exports = app;