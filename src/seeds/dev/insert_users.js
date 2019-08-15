const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  const password = await bcrypt.hash('Test1234', 12);

  await knex('user').del();
  // For now, insert a single user
  await knex('user').insert(
    {
      id: 1,
      email: 'admin@squadleader.com',
      password
    },
  );
};
