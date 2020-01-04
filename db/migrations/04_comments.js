exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
      .notNullable();
    table
      .integer('review_id')
      .references('id')
      .inTable('reviews')
      .onDelete('cascade')
      .notNullable();
    table.string('content', 1000).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
