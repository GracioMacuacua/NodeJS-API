'use strict'

const Product = require('../models/product');

exports.get = async () => {
    const res = await Product
        .findAll({
            attributes: ['id', 'title', 'description', 'price'],
            where: {
                active: true
            }
        });
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Product
        .findOne({
            attributes: ['id', 'title', 'description', 'price'],
            where: {
                slug: slug,
                active: true
            }
        });
    return res;
}

exports.getById = async (id) => {
    const res = await Product
        .findByPk(id, {
            attributes: ['id', 'title', 'description', 'price']
        });
    return res;
}

exports.create = async (data) => {
    await Product
        .create(data);
}

exports.update = async (id, data) => {
    await Product
        .update(
            data,
            {
                where: {
                    id: id
                }
            });
}

exports.delete = async (id) => {
    await Product
        .destroy({
            where: {
                id: id
            }
        });
}