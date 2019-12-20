const knex = require('../db/knex');

exports.getAllComments = (req, res) => {
        knex('comments').then(comments => res.json(comments));
};

exports.getOneComment = (req, res) => {
        knex('comments')
                .where('id', req.params.id)
                .then(comment => res.json(comment));
};

exports.addComment = (req, res) => {
        knex('comments')
                .insert(req.body)
                .returning('*')
                .then(newUser => res.json(newUser));
};

exports.updateComment = (req, res) => {
        knex('comments')
                .where('id', req.params.id)
                .update(req.body)
                .returning('*')
                .then(updatedComment => res.json(updatedComment));
};

exports.removeComment = (req, res) => {
        knex('comments')
                .del()
                .where('id', req.params.id)
                .returning('*')
                .then(removedComment => res.json(removedComment));
};
