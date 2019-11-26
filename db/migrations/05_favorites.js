exports.up = function(knex, Promise) {
        return knex.schema.createTable('favorites', table => {
                table.increments();
                table.integer('user_id')
                        .references('id')
                        .inTable('users')
                        .onDelete('cascade')
                        .notNullable();
                table.integer('resource_id')
                        .references('id')
                        .inTable('resources')
                        .onDelete('cascade')
                        .notNullable();
                table.string('note');
                table.timestamps(true, true);
        });
};

exports.down = function(knex, Promise) {
        return knex.schema.dropTable('favorites');
};
