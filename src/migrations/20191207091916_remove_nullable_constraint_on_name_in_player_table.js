exports.up = function(knex) {
  return knex.schema.alterTable("player", table => {
    table
      .string("firstName")
      .nullable()
      .alter();
    table
      .string("lastName")
      .nullable()
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("player", table => {
    table
      .string("firstName")
      .notNullable()
      .alter();
    table
      .string("lastName")
      .notNullable()
      .alter();
  });
};
