const { DB_USERNAME, DB_PASSWORD, DB_PORT, DB_HOST, DB_NAME, DATABASE_URL } = process.env;

const connectionString =
  process.platform === 'win32'
    ? `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
    : `postgres://${DB_HOST}/${DB_NAME}`;

const newConnectionString = `postgres://localhost/dev_resources`;

module.exports = {
  development: {
    client: 'pg',
    connection: DATABASE_URL,
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },
};
