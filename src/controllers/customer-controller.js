'use strict'

const repository = require('../repositories/customer-repository');
const authService = require('../services/auth-service');
const md5 = require('md5');
require('dotenv/config');
const SECRET = process.env.SECRET_KEY;

/** Busca um cliente com base no seu ID */
exports.getById = async (req, res, next) => {
    try {
        const data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: e
        });
    }
}

/** Cria novos clientes */
exports.post = async (req, res, next) => {
    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + SECRET),
            role: req.body.role == null ? 'user' : 'admin'
        });
        
        res.status(201).send({
            message: 'Usuário cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: e
        });
    }
};