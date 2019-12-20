const knex = require('../db/knex');

exports.getAllFavorites = (req, res) => {
        knex('favorites').then(favorites => res.json(favorites));
};

exports.getOneFavorite = (req, res) => {
        knex('favorites')
                .where('id', req.params.id)
                .then(favorite => res.json(favorite));
};

exports.addFavorite = (req, res) => {
        knex('favorites')
                .insert(req.body)
                .returning('*')
                .then(newFavorite => res.json(newFavorite));
};

exports.removeFavorite = (req, res) => {
        knex('favorites')
                .del()
                .where('id', req.params.id)
                .returning('*')
                .then(removedFavorite => res.json(removedFavorite));
};
