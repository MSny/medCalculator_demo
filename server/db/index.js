require('pg');
require('dotenv').config();

const Sequelize = require('sequelize');

const {
    DB_HOST,
    DB_URL,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
  } = process.env;

const dbURL =`${DB_HOST}://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/${DB_NAME}`

const sequelize = new Sequelize(dbURL, {logging: false});
let cachedConnection = null;

/**
 * NOTE: Sequelize will keep the connection open by default, and use the same connection for all queries.
 * If you need to close the connection, call sequelize.close() (which is asynchronous and returns a Promise).
 */
const connect = async () => {
  if (cachedConnection) {
    console.info('PG-USING-CACHED-CONNECTION');
    return cachedConnection;
  }
  console.info('PG-CONNECTING...');
  await sequelize
    .authenticate()
    .then(() => {
      console.info('PG-SUCCESSFULLY-CONNECTED!');
    })
    .catch(err => {
      console.error('PG-ERROR-CONNECTING-TO-THE-DATABASE:', err);
    });
  cachedConnection = sequelize;
  return sequelize;
};

const defaultModelOptions = { timestamps: false };

const defineModel = (name, schema, options = { underscored: true }) =>
  sequelize.define(name, schema, {
    ...defaultModelOptions,
    tableName: name,
    ...options,
  });

module.exports = { connect, defineModel, sequelize };
