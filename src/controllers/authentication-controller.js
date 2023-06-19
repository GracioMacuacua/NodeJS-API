'use strict'

const repository = require('../repositories/authentication-repository');
const authService = require('../services/auth-service');
const customerRepository = require('../repositories/customer-repository');
const md5 = require('md5');
require('dotenv/config');
const SECRET = process.env.SECRET_KEY;

exports.authenticate = async (req, res, next) => {
    try {
        const customer = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + SECRET)
        });

        if (!customer) {
            res.status(401).send({
                message: 'Usuário ou senha inválidos!'
            });
            return;
        }
        
        const token = await authService.generateToken({
            id: customer.id,
            role: customer.role
        });

        res.status(200).send({
            token: token,
            customer: {
                id: customer.id,
                role: customer.role
            }
        });
    } catch (e) {
        console.log('Falha ao processar sua requisição')
    }
}

exports.refreshToken = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['authorization'];
        const data = await authService.decodeToken(token);

        const customer = await customerRepository.getById(data.id);
        
        if (!customer) {
            res.status(401).send({
                message: 'Usuário não encontrado!'
            });
            return;
        }
        
        const tokenData = await authService.generateToken({
            id: customer.id,
            role: customer.role
        });

        res.status(200).send({
            token: tokenData,
            customer: {
                id: customer.id,
                role: customer.role
            }
        });
    } catch (e) {
        console.log('Falha ao processar sua requisição.')
    }
}