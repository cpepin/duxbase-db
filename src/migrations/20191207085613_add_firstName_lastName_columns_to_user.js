exports.up = async function(knex) {
  await knex.schema.table("user", table => {
    table.string("firstName");
    table.string("lastName");
  });

  await knex("user")
    .where({
      firstName: null,
      lastName: null
    })
    .update({ firstName: "default", lastName: "default" });

  return knex.schema.alterTable("user", table => {
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

exports.down = function(knex) {
  return knex.schema.alterTable("user", table => {
    table.dropColumn("firstName");
    table.dropColumn("lastName");
  });
};
