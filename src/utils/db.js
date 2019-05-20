const mongo = require('mongodb').MongoClient;

const settings = {
  connectionString: '',
  dbName: '',
  dbCollection: '',
};

let client;
let collection;

const setup = (connectionString, dbName, dbCollection) => {
  settings.connectionString = connectionString;
  settings.dbName = dbName;
  settings.dbCollection = dbCollection;
};

const connect = async () => {
  try {
    client = await mongo.connect(settings.connectionString);
    const db = await client.db(settings.dbName);
    collection = await db.collection(settings.dbCollection);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const disconnect = async () => client.close();

const insertOne = async (data) => {
  await connect();

  try {
    const response = await collection.insertOne(data);
    disconnect();

    return response.ops[0];
  } catch (err) {
    disconnect();
    throw err;
  }
};

const findOne = async (data) => {
  await connect();

  try {
    const response = await collection.findOne(data);
    disconnect();

    return response;
  } catch (err) {
    disconnect();
    throw err;
  }
};

module.exports = {
  setup,
  insertOne,
  findOne,
};
