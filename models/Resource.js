const { Model } = require('objection');

class Resource extends Model {
  // Name of the table
  static get tableName() {
    return 'resources';
  }

  // Mapping any relations
  // Example is a 1 to many relation
  // static get relationMappings() {
  //   const [Model Name] = require("./[Model path]");
  //   return {
  //     [Related Table Name]: {
  //       relation: Model.HasManyRelation,
  //       modelClass: [Model Name],
  //       join: {
  //         from: "users.id",
  //         to: "[Table Name].user_id"
  //       }
  //     }
  //   };
  // }

  // JSON Schema used for validation
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['type', 'subtype', 'title', 'description', 'url', 'price', 'skill_level'],

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
      },
    };
  }
}

module.exports = Resourse;
