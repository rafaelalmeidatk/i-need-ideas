const path = require('path');
require('dotenv').config();

const migrations = {
  tableName: 'knex_migrations',
  directory: path.normalize(path.join(__dirname, 'src/db/migrations'))
};

const seeds = {
  directory: path.normalize(path.join(__dirname, `src/db/seeds`))
};

module.exports = {
  client: 'postgresql',
  connection: {
    host: '127.0.0.1',
    user: process.env.DEV_POSTGRES_USER,
    password: process.env.DEV_POSTGRES_PASS,
    database: process.env.DEV_POSTGRES_DB
  },
  pool: {
    min: 2,
    max: 10
  },
  debug: true,
  migrations,
  seeds
};
