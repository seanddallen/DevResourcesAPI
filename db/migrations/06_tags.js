exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', table => {
    table.increments();
    table
      .integer('resource_id')
      .references('id')
      .inTable('resources')
      .onDelete('cascade')
      .notNullable();
    table.string('name');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags');
};
