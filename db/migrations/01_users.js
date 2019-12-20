exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('username').notNullable();
    table.string('email').notNullable();
    table.boolean('freelance').notNullable();
    table.boolean('employed').notNullable();
    table.string('education').notNullable();
    table.string('experience').notNullable();
    table.string('years').notNullable();
    table.string('specialty').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
