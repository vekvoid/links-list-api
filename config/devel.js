// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  env: 'dev',
  host: 'localhost',
  port: 3000,
  db: {
    connection: process.env.DB_CONNECTION,
    name: process.env.DB_NAME,
  },
};
