const { createList, findList } = require('../services');

const postList = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await createList(name);

    res.status(201).json(result);
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
};

const getList = async (req, res, next) => {
  try {
    const { uuid } = req.params;
    const list = await findList(uuid);
    console.log(list);

    res.status(200).json(list);
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
};

module.exports = {
  postList,
  getList,
};
