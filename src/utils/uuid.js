const shortid = require('shortid');

const generate = () => shortid.generate();
const isValid = uuid => shortid.isValid(uuid);

module.exports = {
  generate,
  isValid,
};
