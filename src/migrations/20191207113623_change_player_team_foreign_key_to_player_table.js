exports.up = function(knex) {
  return knex.schema.alterTable("player_team", table => {
    table.dropForeign("player_id");
    table
      .integer("player_id")
      .references("id")
      .inTable("player")
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("player", table => {
    table.dropForeign("player_id");
    table
      .integer("player_id")
      .references("id")
      .inTable("user")
      .alter();
  });
};
