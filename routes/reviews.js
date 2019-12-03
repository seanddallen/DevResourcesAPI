const express = require('express');

const router = express.Router();
const reviewsController = require('../controllers/reviews');

router.get('/reviews', reviewsController.getAllReviews);
router.get('/reviews/:id', reviewsController.getOneReview);
router.post('/reviews', reviewsController.addReview);
router.patch('/reviews/:id', reviewsController.updateReview);
router.delete('/reviews/:id', reviewsController.removeReview);

module.exports = router;
