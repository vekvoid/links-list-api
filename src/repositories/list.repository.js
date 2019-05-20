const db = require('../utils/db');
const { db: { connection: connectionString, name: dbName } } = require('../config');

const LIST_COLLECTION_NAME = 'lists';

db.setup(connectionString, dbName, LIST_COLLECTION_NAME);

const setList = async (data) => {
  console.log(data);
  try {
    const item = await db.insertOne(data);

    return item;
  } catch (err) {
    throw err;
  }
};

const findList = async (uuid) => {
  try {
    const item = await db.findOne({ uuid });

    return item;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  setList,
  findList,
};
