exports.up = function(knex, Promise) {
        return knex.schema.createTable('resources', table => {
                table.increments();
                table.string('type').notNullable();
                table.string('subtype').notNullable();
                table.string('title').notNullable();
                table.string('creator');
                table.integer('creation_year');
                table.string('url').notNullable();
                table.string('description').notNullable();
                table.string('image');
                table.string('price').notNullable();
                table.string('skill_level').notNullable();
                table.integer('shares').notNullable();
                table.timestamps(true, true);
        });
};

exports.down = function(knex, Promise) {
        return knex.schema.dropTable('resources');
};
