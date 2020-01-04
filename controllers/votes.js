const Vote = require('../models/Vote');

exports.getAllVotes = async (req, res) => {
  const votes = await Vote.query();
  res.json(votes);
};

exports.getOneVote = async (req, res) => {
  const vote = await Vote.query().findById(req.params.id);
  res.json(vote);
};

exports.addVote = async (req, res) => {
  const newVote = await Vote.query()
    .insert(req.body)
    .returning('*');
  res.json(newVote);
};

exports.updateVote = async (req, res) => {
  const updatedVoted = await Vote.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning('*');
  res.json(updatedVoted);
};

exports.removeVote = async (req, res) => {
  const deletedVote = await Vote.query()
    .deleteById(req.params.id)
    .returning('*');
  res.json(deletedVote);
};
