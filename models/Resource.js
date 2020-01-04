const { Model } = require('objection');
const Vote = require('./Vote');
const Review = require('./Review');
const Tag = require('./Tag');

class Resource extends Model {
  // Name of the table
  static get tableName() {
    return 'resources';
  }

  // Mapping any relations
  // Example is a 1 to many relation
  static get relationMappings() {
    return {
      votes: {
        relation: Model.HasManyRelation,
        modelClass: Vote,
        join: {
          from: 'resources.id',
          to: 'votes.resource_id',
        },
      },

      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: 'resources.id',
          to: 'reviews.resource_id',
        },
      },

      tags: {
        relation: Model.HasManyRelation,
        modelClass: Tag,
        join: {
          from: 'resources.id',
          to: 'tags.resource_id',
        },
      },
    };
  }

  // JSON Schema used for validation
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['type', 'subtype', 'title', 'description', 'url', 'price', 'skill_level', 'shares', 'approved'],

      properties: {
        id: { type: 'integer' },
        type: { type: 'string', minLength: 1, maxLength: 255 },
        subtype: { type: 'string', minLength: 1, maxLength: 255 },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        creator: { type: 'string', minLength: 1, maxLength: 255 },
        creation_year: { type: 'integer' },
        url: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 255 },
        image: { type: 'string', minLength: 1, maxLength: 255 },
        price: { type: 'string', minLength: 1, maxLength: 255 },
        skill_level: { type: 'string', minLength: 1, maxLength: 255 },
        created_at: { type: 'string', minLength: 1, maxLength: 255 },
        updated_at: { type: 'string', minLength: 1, maxLength: 255 },
        shares: { type: 'integer' },
        approved: { type: 'boolean' },
      },
    };
  }
}

module.exports = Resource;
