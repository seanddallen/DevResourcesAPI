const Tag = require('../models/Tag');

exports.getAllTags = async (req, res) => {
  const tags = await Tag.query();
  res.json(tags);
};

exports.getAllResourceTags = async (req, res) => {
  const tag = await Tag.query().findById(req.params.id);
  res.json(tag);
};

exports.addTag = async (req, res) => {
  const newTag = await Tag.query()
    .insert(req.body)
    .returning('*');
  res.json(newTag);
};

exports.updateTag = async (req, res) => {
  const updatedTag = await Tag.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning('*');
  res.json(updatedTag);
};

exports.removeTag = async (req, res) => {
  const deletedTag = await Tag.query()
    .deleteById(req.params.id)
    .returning('*');
  res.json(deletedTag);
};
