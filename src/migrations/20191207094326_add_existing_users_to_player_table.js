exports.up = async function(knex) {
  const users = await knex.select("*").from("user");

  await Promise.all(
    users.map(async user => knex("player").insert({ user_id: user.id }))
  );
};

exports.down = async function(knex) {
  const users = await knex.select("*").from("user");

  await Promise.all(
    users.map(async user =>
      knex("player")
        .del()
        .where({ user_id: user.id })
    )
  );
};
