const validator = require('../schema/validator');
const { compare } = require('../utils/function');
const { createToken } = require('../utils/jwt');
const userRepo = require('../repositories/user');
const { resFailNotFound } = require('../utils/response');

exports.login = async (req, res, next) => {
  const { email } = req.body;
  try {
    const validate = validator.login(req.body);
    if (validate.error != null) {
      res.status(400);
      next(validate.error);
    } else {
      const findData = await userRepo.findByEmail(email);
      if (findData) {
        const stringfy = JSON.stringify(findData);
        const formatData = JSON.parse(stringfy);
        const token = createToken(formatData);
        if (compare(req.body.password, findData.password)) {
          res.json({
            success: true, token: token.token, refresh_token: token.refresh_token, data: findData
          });
        } else {
          res.json(resFailNotFound('Password Wrong'));
          res.status(401);
        }
      } else {
        res.json(resFailNotFound('Username not found'));
        res.status(401);
      }
    }
  } catch (error) {
    next(error);
  }
};
