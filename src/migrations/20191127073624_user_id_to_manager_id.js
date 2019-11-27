exports.up = function(knex) {
  return knex.schema.table("team", table => {
    table.renameColumn("user_id", "manager_id");
  });
};

exports.down = function(knex) {
  return knex.schema.table("team", table => {
    table.renameColumn("manager_id", "user_id");
  });
};
