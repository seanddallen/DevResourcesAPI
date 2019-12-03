const knex = require('../db/knex');

exports.getAllUsers = (req, res) => {
        knex('users').then(users => res.json(users));
};

exports.getOneUser = (req, res) => {
        knex('users')
                .where('id', req.params.id)
                .then(user => res.json(user));
};

exports.addUser = (req, res) => {
        knex('users')
                .insert(req.body)
                .returning('*')
                .then(newUser => res.json(newUser));
};

exports.updateUser = (req, res) => {
        knex('users')
                .where('id', req.params.id)
                .update(req.body)
                .returning('*')
                .then(updatedUser => res.json(updatedUser));
};

exports.removeUser = (req, res) => {
        knex('users')
                .del()
                .where('id', req.params.id)
                .returning('*')
                .then(removedUser => res.json(removedUser));
};
