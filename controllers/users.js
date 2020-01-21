const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  const users = await User.query().withGraphFetched('[favorites, votes, reviews]');
  res.json(users);
};

exports.getOneUser = async (req, res) => {
  const user = await User.query()
    .findById(req.params.id)
    .withGraphFetched('[favorites, votes, reviews]');
  res.json(user);
};

exports.addUser = async (req, res) => {
  const newUser = await User.query()
    .insert(req.body)
    .returning('*');
  res.json(newUser);
};

exports.updateUser = async (req, res) => {
  const updatedUser = await User.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning('*');
  res.json(updatedUser);
};

exports.removeUser = async (req, res) => {
  const deletedUser = await User.query()
    .deleteById(req.params.id)
    .returning('*');
  res.json(deletedUser);
};
