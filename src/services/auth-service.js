'use strict'

require('dotenv/config');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_KEY;

/** Gera tokens de acesso para os Customers */
exports.generateToken = async (data) => {
    return jwt.sign(data, SECRET, { expiresIn: '300s' });
}

/** Decodifica os tokens de acesso */
exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, SECRET);
    return data;
}

/** Efectua a checagem de tokens para autenticação de Customers */
exports.authorize = function (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['authorization'];
    
    if (!token) {
        res.status(401).json({
            message: 'Acesso negado!'
        });
    } else {
        jwt.verify(token, SECRET, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token inválido!'
                });
            } else {
                next();
            }
        });
    }
}

/** Intercepta os pedidos direcionados para rotas restritas a administradores  */
exports.isAdmin = function (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['authorization'];

    if (!token) {
        res.status(401).json({
            message: 'Token inválido!'
        });
    } else {
        jwt.verify(token, SECRET, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token inválido!'
                });
            } else {
                if (decoded.role == 'admin') {
                    next();
                } else {
                    res.status(403).json({
                        message: 'Esta funcionalidade é restrita para administradores!'
                    });
                }
            }
        });
    }
}