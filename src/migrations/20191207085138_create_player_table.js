exports.up = function(knex) {
  return knex.schema.createTable("player", table => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .references("id")
      .inTable("user");
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table
      .string("email")
      .unique()
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("player");
};
