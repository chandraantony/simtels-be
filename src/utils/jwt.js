const jwt = require('jsonwebtoken');

const token_exp = { expiresIn: 60 * 1800 }; // change to 2 min
const refreh_exp = { expiresIn: 60 * 1800 }; // refresh expired in 1 montth

exports.createToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_KEY, token_exp);
  const refrehToken = jwt.sign(payload, process.env.SECRET_KEY, refreh_exp);
  return {
    token,
    refresh_token: refrehToken
  };
};

exports.refreshToken = (token, refreshToken) => {
  const verifyToken = jwt.verify(token, process.env.SECRET_KEY, jwt.decode(refreshToken));
  return verifyToken;
};

exports.decodeToken = (token) => {
  const decode = jwt.verify(token, process.env.SECRET_KEY);
  console.log(decode);
  return decode;
};

exports.validateToken = (token) => {
  const decode = jwt.verify(token);
  return decode;
};
