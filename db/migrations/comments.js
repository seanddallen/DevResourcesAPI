exports.up = function(knex, Promise) {
        return knex.schema.createTable('comments', table => {
                table.increments();
                table.integer('user_id').notNullable();
                table.integer('review_id').notNullable();
                table.string('content').notNullable();
                table.timestamps(true, true);
        });
};

exports.down = function(knex, Promise) {
        return knex.schema.dropTable('comments');
};
