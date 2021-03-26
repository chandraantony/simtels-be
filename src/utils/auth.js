const jwt = require('jsonwebtoken');

checkProvidedToken = (token) => {
  if(token == undefined || token == null || token == ''){
    return false
  }
  return true
}


module.exports = {
  checkProvidedToken
}
