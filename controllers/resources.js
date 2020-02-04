const Resource = require('../models/Resource');
const Tag = require('../models/Tag');

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
  const tagsInBody = req.body.tags;
  const newTags = [];
  let newResourse = {
    type: req.body.type,
    subtype: req.body.subtype,
    title: req.body.title,
    creator: req.body.creator,
    creation_year: req.body.creation_year,
    url: req.body.url,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    skill_level: req.body.skill_level,
    shares: req.body.shares,
    upvotes: req.body.upvotes,
    downvotes: req.body.downvotes,
    approved: req.body.approved,
  };

  const addedResource = await Resource.query()
    .insert(newResourse)
    .returning('*');
  
  console.log('added resource: ', addedResource)

  tagsInBody.forEach(async tag => {
    const formattedTag = {
      resource_id: addedResource.id,
      name: tag.name,
    }
    const newTag = await Tag.query()
      .insert(formattedTag)
      .returning('*');

    console.log('new tag', newTag)
    newTags.push(newTag);
  });

  
  const formattedResource = await Resource.query()
    .findById(addedResource.id)
    .withGraphFetched('tags');
  console.log('new resource: ', formattedResource)
  res.json('got it');
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
