
exports.up = function(knex) {
    return knex.schema.createTable('funcionarios', function (table) {
        table.increments();

        table.string('nome_funcionario').notNullable();
        table.string('email_funcionario').notNullable();
        table.decimal('value').notNullable();

        table.string('rh_id').notNullable();

        table.foreign('rh_id').references('id').inTable('rh');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('funcionarios');
};
