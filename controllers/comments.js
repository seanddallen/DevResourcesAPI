const Comment = require('../models/Comment');

exports.getAllComments = async (req, res) => {
  const comments = await Comment.query();
  res.json(comments);
};

exports.getOneComment = async (req, res) => {
  const comment = await Comment.query().findById(req.params.id);
  res.json(comment);
};

exports.addComment = async (req, res) => {
  const newComment = await Comment.query()
    .insert(req.body)
    .returning('*');
  res.json(newComment);
};

exports.updateComment = async (req, res) => {
  const updatedComment = await Comment.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning('*');
  res.json(updatedComment);
};

exports.removeComment = async (req, res) => {
  const deletedComment = await Comment.query()
    .deleteById(req.params.id)
    .returning('*');
  res.json(deletedComment);
};
