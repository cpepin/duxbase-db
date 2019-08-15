exports.up = function createUserTable(knex) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary();
    table
      .string('email')
      .unique()
      .notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function dropUserTable(knex) {
  return knex.schema.dropTable('user');
};
