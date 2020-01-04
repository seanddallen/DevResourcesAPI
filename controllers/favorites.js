const Favorite = require('../models/Favorite');

exports.getAllFavorites = async (req, res) => {
  const favorites = await Favorite.query();
  res.json(favorites);
};

exports.getOneFavorite = async (req, res) => {
  const favorite = Favorite.query().findById(req.params.id);
  res.json(favorite);
};

exports.addFavorite = async (req, res) => {
  const newFavorite = await Favorite.query()
    .insert(req.body)
    .returning('*');
  res.json(newFavorite);
};

exports.updateFavorite = async (req, res) => {
  const updatedFavorite = await Favorite.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning('*');
  res.json(updatedFavorite);
};

exports.removeFavorite = async (req, res) => {
  const deletedFavorite = await Favorite.query()
    .deleteById(req.params.id)
    .returning('*');
  res.json(deletedFavorite);
};
