//a function that will create the users table
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('created_at').notNullable();
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users')
}