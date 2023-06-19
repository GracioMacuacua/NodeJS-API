'use strict'

require('dotenv/config');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_KEY;

exports.generateToken = async (data) => {
    return jwt.sign(data, SECRET, { expiresIn: '300s' });
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, SECRET);
    return data;
}

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