const Model = require('./model');
const User = require('../../models/mstUser');

exports.findById = (id) => {
  const data = User.query().findById(id);
  return data;
};

exports.findAll = (pageSize, pageNumber, search) => {
  let data;
  if (search) {
    data = User.query().whereRaw('LOWER(name) LIKE ?', `%${search.toLowerCase()}%`).page(pageNumber, pageSize);
  } else {
    data = User.query().page(pageNumber, pageSize);
  }
  return data;
};

exports.insert = (data) => {
  const model = Model.user(data);
  const query = User.query().insert(model);
  return query;
};

exports.update = (id, data) => {
  const model = Model.user(data);
  const query = User.query()
    .findById(id)
    .patch(model);
  return query;
};

exports.deleteData = (id) => User.query().deleteById(id);
