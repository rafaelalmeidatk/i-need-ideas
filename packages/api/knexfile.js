const path = require('path');
require('dotenv').config();

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEV = NODE_ENV === 'development';

const migrations = {
  tableName: 'knex_migrations',
  directory: path.normalize(path.join(__dirname, 'src/db/migrations')),
};

const seeds = {
  directory: path.normalize(path.join(__dirname, `src/db/seeds`)),
};

const connection = process.env.DATABASE_URL || {
  host: '127.0.0.1',
  user: process.env.DEV_POSTGRES_USER,
  password: process.env.DEV_POSTGRES_PASS,
  database: process.env.DEV_POSTGRES_DB,
};

module.exports = {
  client: 'postgresql',
  connection,
  pool: {
    min: 2,
    max: 10,
  },
  debug: IS_DEV,
  migrations,
  seeds,
};
