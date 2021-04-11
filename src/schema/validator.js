const Joi = require('joi');

exports.login = (req) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(req);
};

exports.master = (req, res, next) => {
  const data = req.body;
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const validate = schema.validate(data);
  if (validate.error != null) {
    res.status(400);
    next(validate.error);
  } else {
    next();
  }
};

exports.project = (req, res, next) => {
  const data = req.body;
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const validate = schema.validate(data);
  if (validate.error != null) {
    res.status(400);
    next(validate.error);
  } else {
    next();
  }
};
