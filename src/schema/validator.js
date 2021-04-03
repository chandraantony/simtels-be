const Joi = require('joi');

exports.login = (req, res, next) => {
  const data = req.body;
  const schema = Joi.object({
    user_name: Joi.string().required(),
    password: Joi.string().required(),
  });
  const validate = schema.validate(data);
  if (validate.error != null) {
    res.status(400);
    next(validate.error);
  } else {
    next();
  }
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
