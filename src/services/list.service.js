const uuidUitl = require('../utils/uuid');
const listRepository = require('../repositories/list.repository');

const createList = async (name) => {
  const uuid = uuidUitl.generate();
  console.log(`Creating ${name} list with Id '${uuid}'`);
  const { uuid: insertedUuid } = await listRepository.setList({ uuid, name });
  console.log('Created');
  return { uuid: insertedUuid };
};

const findList = async (uuid) => {
  console.log(`Finding list with Id '${uuid}'`);
  const { _id, ...list } = await listRepository.findList(uuid);

  return list;
};

module.exports = {
  createList,
  findList,
};
