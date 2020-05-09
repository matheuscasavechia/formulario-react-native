
exports.up = function(knex) {
    return knex.schema.createTable('rh', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('rh');
};
