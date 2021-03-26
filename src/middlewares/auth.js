const { checkProvidedToken } = require("../utils/auth");

const authorization = (req, res, next) => {
    const bearer_token = req.headers.authorization;
    if(!checkProvidedToken(bearer_token)){
      const error = new Error('token not provided')
      res.status(401)
      next(error)
    }else{
      try {
        const token = bearer_token.split(' ');
        const verify = jwt.verify(token[1], process.env.SECRET_KEY);
        req.session = verify
        next()
      } catch (error) {
        res.status(403)
        next(error);
      }
    }
  
  };
  
module.exports = {
    authorization
}
  