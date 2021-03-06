require('dotenv').config();

module.exports = {
  development: {
    client: process.env.DB_CONNECTION,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: process.env.DB_DATABASE
    },
    acquireConnectionTimeout: process.env.DB_TIMEOUT
  },
  staging: {
    client: process.env.DB_CONNECTION,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    acquireConnectionTimeout: process.env.DB_TIMEOUT,
    migrations: {
      tableName: process.env.DB_DATABASE
    }
  },

  production: {
    client: process.env.DB_CONNECTION,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      ssl: { rejectUnauthorized: false }

    },
    pool: {
      min: 2,
      max: 10
    },
    acquireConnectionTimeout: process.env.DB_TIMEOUT,
    migrations: {
      tableName: process.env.DB_DATABASE
    }
  }

};
