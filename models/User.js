const { Model } = require('objection');
const Comment = require('./Comment');
const Favorite = require('./Favorite');
const Vote = require('./Vote');
const Review = require('./Review');

class User extends Model {
  // Name of the table
  static get tableName() {
    return 'users';
  }

  // Mapping any relations
  // Example is a 1 to many relation
  static get relationMappings() {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: 'users.id',
          to: 'comments.user_id',
        },
      },

      favorites: {
        relation: Model.HasManyRelation,
        modelClass: Favorite,
        join: {
          from: 'users.id',
          to: 'favorites.user_id',
        },
      },

      votes: {
        relation: Model.HasManyRelation,
        modelClass: Vote,
        join: {
          from: 'users.id',
          to: 'votes.user_id',
        },
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: 'users.id',
          to: 'reviews.user_id',
        },
      },
    };
  }

  // JSON Schema used for validation
  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'first_name',
        'last_name',
        'username',
        'email',
        'freelance',
        'employed',
        'education',
        'experience',
        'years',
        'specialty',
      ],

      properties: {
        id: { type: 'integer' },
        first_name: { type: 'string', minLength: 1, maxLength: 255 },
        last_name: { type: 'string', minLength: 1, maxLength: 255 },
        username: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        freelance: { type: 'boolean' },
        employed: { type: 'boolean' },
        education: { type: 'string', minLength: 1, maxLength: 255 },
        experience: { type: 'string', minLength: 1, maxLength: 255 },
        years: { type: 'string', minLength: 1, maxLength: 255 },
        specialty: { type: 'string', minLength: 1, maxLength: 255 },
        created_at: { type: 'string', minLength: 1, maxLength: 255 },
        updated_at: { type: 'string', minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = User;
