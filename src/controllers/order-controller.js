'use strict'

const Order = require('../models/order');
const guid = require('guid');
const authService = require('../services/auth-service');
const repository = require('../repositories/order-repository');

/** Busca todos os Pedidos da base de dados */
exports.get = async (req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: e
        });
    }
};

/** Registra pedidos na base de dados */
exports.post = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['authorization'];
        const data = await authService.decodeToken(token);

        await repository.create({
            customer_Id: req.body.customer_Id,
            number: guid.raw().substring(0, 6),
        });

        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: e
        });
    }
};