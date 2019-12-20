const knex = require('../db/knex');

exports.getAllResources = (req, res) => {
        knex('resources').then(resources => res.json(resources));
};

exports.getOneTag = (req, res) => {
        knex('resources')
                .where('id', req.params.id)
                .then(resource => res.json(resource));
};

exports.addResource = (req, res) => {
        knex('resources')
                .insert(req.body)
                .returning('*')
                .then(newResource => res.json(newResource));
};

exports.updateResource = (req, res) => {
        knex('resources')
                .where('id', req.params.id)
                .update(req.body)
                .returning('*')
                .then(updatedResource => res.json(updatedResource));
};

exports.removeResource = (req, res) => {
        knex('resources')
                .del()
                .where('id', req.params.id)
                .returning('*')
                .then(removedResource => res.json(removedResource));
};
