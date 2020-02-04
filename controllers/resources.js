const Resource = require('../models/Resource');

exports.getAllResources = async (req, res) => {
  const resources = await Resource.query().withGraphFetched('[votes, reviews, tags]');
  res.json(resources);
};

exports.getOneResource = async (req, res) => {
  const resource = await Resource.query()
    .findById(req.params.id)
    .withGraphFetched('[votes, reviews, tags]');
  res.json(resource);
};

exports.addResource = async (req, res) => {
  const newResource = await Resource.query()
    .insert(req.body)
    .returning('*')
    .withGraphFetched('[votes, reviews, tags]');
  res.json(newResource);
};

exports.updateResource = async (req, res) => {
  const updatedResource = await Resource.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning('*');
  res.json(updatedResource);
};

exports.removeResource = async (req, res) => {
  const deletedResource = await Resource.query()
    .deleteById(req.params.id)
    .returning('*');
  res.json(deletedResource);
};
