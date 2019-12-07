exports.up = function(knex) {
  return knex.schema.alterTable("player", table => {
    table
      .string("email")
      .nullable()
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("player", table => {
    table
      .string("email")
      .notNullable()
      .alter();
  });
};
