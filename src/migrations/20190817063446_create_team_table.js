
exports.up = function(knex) {
  return knex.schema.createTable('team', table => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('user');
    table.string('name').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('team');
};

