require('dotenv').config();

const { DB_URL } = process.env;

module.exports = {
  development: {
    client: 'postgres',
    connection: DB_URL,
    seeds: {
      directory: './src/seeds/dev'
    },
    migrations: {
      directory: './src/migrations'
    }
  }
};