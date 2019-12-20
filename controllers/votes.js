const knex = require('../db/knex');

exports.getAllVotes = (req, res) => {
        knex('votes').then(votes => res.json(votes));
};

exports.getOneVote = (req, res) => {
        knex('votes')
                .where('id', req.params.id)
                .then(vote => res.json(vote));
};

exports.addVote = (req, res) => {
        knex('votes')
                .insert(req.body)
                .returning('*')
                .then(newUser => res.json(newUser));
};

exports.updateUser = (req, res) => {
        knex('votes')
                .where('id', req.params.id)
                .update(req.body)
                .returning('*')
                .then(updatedVote => res.json(updatedVote));
};

exports.removeVote = (req, res) => {
        knex('votes')
                .del()
                .where('id', req.params.id)
                .returning('*')
                .then(removedVote => res.json(removedVote));
};
