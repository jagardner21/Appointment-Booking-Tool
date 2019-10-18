exports.up = function (knex) {
    return knex.schema.createTable('appointments', function (table) {
        table.increments();
        table.string('title');
        // table.string('location');
        // table.string('date_time');
        table.string('body');
        table.boolean('completed').notNullable();
        table.integer('organizer_id').references('id').inTable('users').notNullable();
        table.integer('guest_id').references('id').inTable('users');
        table.timestamps(true, true);
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('appointments')
}