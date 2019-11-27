exports.up = function(knex) {
  return knex.schema.createTable("player_team", table => {
    table.increments("id").primary();
    table
      .integer("player_id")
      .references("id")
      .inTable("user");
    table
      .integer("team_id")
      .references("id")
      .inTable("team");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("player_team");
};
