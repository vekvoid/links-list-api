const Joi = require('@hapi/joi');

const validate = (data, schema, res, next) => {
  const result = Joi.validate(data, schema);

  if (result.error) {
    const { message } = result.error.details[0];
    return res.status(400).json({ error: message });
  }
  return next();
};

const validatePostList = (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
  });

  validate(req.body, schema, res, next);
};

const validateGetList = (req, res, next) => {
  const schema = Joi.object().keys({
    uuid: Joi.string().alphanum().min(9).max(30)
      .required(),
  });

  validate(req.params, schema, res, next);
};

module.exports = {
  validatePostList,
  validateGetList,
};
