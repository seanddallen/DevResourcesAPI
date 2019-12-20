const knex = require('../db/knex');

exports.getAllReviews = (req, res) => {
        knex('reviews').then(reviews => res.json(reviews));
};

exports.getOneTag = (req, res) => {
        knex('reviews')
                .where('id', req.params.id)
                .then(review => res.json(review));
};

exports.addReview = (req, res) => {
        knex('reviews')
                .insert(req.body)
                .returning('*')
                .then(newReview => res.json(newReview));
};

exports.updateReview = (req, res) => {
        knex('reviews')
                .where('id', req.params.id)
                .update(req.body)
                .returning('*')
                .then(updatedReview => res.json(updatedReview));
};

exports.removeReview = (req, res) => {
        knex('reviews')
                .del()
                .where('id', req.params.id)
                .returning('*')
                .then(removedReview => res.json(removedReview));
};
