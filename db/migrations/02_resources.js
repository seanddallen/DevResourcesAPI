exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', table => {
    table.increments();
    table.string('type').notNullable();
    table.string('subtype').notNullable();
    table.string('title').notNullable();
    table.string('creator');
    table.integer('creation_year');
    table.string('url').notNullable();
    table.string('description', 1000).notNullable();
    table.string('image');
    table.string('price').notNullable();
    table.string('skill_level').notNullable();
    table.string('age').notNullable();
    table.integer('shares').notNullable();
    table.integer('upvotes').notNullable();
    table.integer('downvotes').notNullable();
    table.boolean('approved').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources');
};
