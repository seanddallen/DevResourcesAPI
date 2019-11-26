exports.up = function(knex, Promise) {
        return knex.schema.createTable('favorites', table => {
                table.increments();
                table.integer('user_id').notNullable();
                table.integer('resource_id').notNullable();
                table.string('note');
                table.timestamps(true, true);
        });
};

exports.down = function(knex, Promise) {
        return knex.schema.dropTable('favorites');
};
