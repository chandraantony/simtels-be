require('dotenv').config();

module.exports = {
    development: {
        client: process.env.DB_CONNECTION,
        connection: {
          database: process.env.DB_DATABASE,
          user:     process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: process.env.DB_DATABASE
        },
        acquireConnectionTimeout:  process.env.DB_TIMEOUT
    },
    staging: {
        client: process.env.DB_CONNECTION,
        connection: {
          database: process.env.DB_DATABASE,
          user:     process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD
        },
        pool: {
          min: 2,
          max: 10
        },
        acquireConnectionTimeout:  process.env.DB_TIMEOUT,
        migrations: {
          tableName: process.env.DB_DATABASE
        }
    },
  
    production: {
        client: process.env.DB_CONNECTION+"?ssl=true",
        connection: {
          database: process.env.DB_DATABASE,
          user:     process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD
        },
        pool: {
          min: 2,
          max: 10
        },
        acquireConnectionTimeout:  process.env.DB_TIMEOUT,
        migrations: {
          tableName: process.env.DB_DATABASE
        }
    }
  
  };
  