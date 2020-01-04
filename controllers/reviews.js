const Review = require('../models/Review');

exports.getAllReviews = async (req, res) => {
  const reviews = await Review.query();
  res.json(reviews);
};

exports.getOneReview = async (req, res) => {
  const review = await Review.query().findById(req.params.id);
  res.json(review);
};

exports.addReview = async (req, res) => {
  const newReview = await Review.query()
    .insert(req.body)
    .returning('*');
  res.json(newReview);
};

exports.updateReview = async (req, res) => {
  const updatedReview = await Review.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning('*');
  res.json(updatedReview);
};

exports.removeReview = async (req, res) => {
  const deletedReview = await Review.query()
    .deleteById(req.params.id)
    .returning('*');
  res.json(deletedReview);
};
