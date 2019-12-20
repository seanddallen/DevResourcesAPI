const express = require('express');

const router = express.Router();
const favoritesController = require('../controllers/favorites');

router.get('/favorites', favoritesController.getAllFavorites);
router.get('/favorites/:id', favoritesController.getOneFavorite);
router.post('/favorites', favoritesController.addFavorite);
router.patch('/favorites/:id', favoritesController.updateFavorite);
router.delete('/favorites/:id', favoritesController.removeFavorite);

module.exports = router;
