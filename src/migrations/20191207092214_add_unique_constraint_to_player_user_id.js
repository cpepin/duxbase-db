exports.up = function(knex) {
  return knex.schema.alterTable("player", table => {
    table
      .integer("user_id")
      .unique()
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.table("player").dropUnique("user_id");
};
