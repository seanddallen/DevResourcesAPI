exports.up = function(knex, Promise) {
        return knex.schema.createTable('tags', table => {
                table.increments();
                table.integer('resource_id').notNullable();
                table.string('name');
                table.timestamps(true, true);
        });
};

exports.down = function(knex, Promise) {
        return knex.schema.dropTable('tags');
};
