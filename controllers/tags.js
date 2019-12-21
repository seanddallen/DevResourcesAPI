const knex = require('../db/knex');

exports.getAllTags = (req, res) => {
  knex('tags').then(tags => res.json(tags));
};

exports.getOneTag = (req, res) => {
  knex('tags')
    .where('id', req.params.id)
    .then(tag => res.json(tag));

exports.getAllResourceTags = (req, res) => {
  knex('tags')
    .where('resource_id', req.params.id)
    .then(tag => res.json(tag));
};

exports.addTag = (req, res) => {
  knex('tags')
    .insert(req.body)
    .returning('*')
    .then(newTag => res.json(newTag));
};

exports.updateTag = (req, res) => {
  knex('tags')
    .where('id', req.params.id)
    .update(req.body)
    .returning('*')
    .then(updatedTag => res.json(updatedTag));
};

exports.removeTag = (req, res) => {
  knex('tags')
    .del()
    .where('id', req.params.id)
    .returning('*')
    .then(removedTag => res.json(removedTag));
};
