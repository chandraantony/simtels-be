const Role = require('../../models/mstRole');
const Model = require('./model');

exports.findById = (id) => {
  const data = Role.query().findById(id);
  return data;
};

exports.findAll = (pageSize, pageNumber, search) => {
  let data;
  if (search) {
    data = Role.query().whereRaw('LOWER(name) LIKE ?', `%${search.toLowerCase()}%`).page(pageNumber, pageSize);
  } else {
    data = Role.query().page(pageNumber, pageSize);
  }
  return data;
};

exports.insert = (data) => {
  const model = Model.role(data);
  const query = Role.query().insert(model);
  return query;
};

exports.update = (id, data) => {
  const model = Model.role(data);
  const query = Role.query()
    .findById(id)
    .patch(model);
  return query;
};

exports.deleteData = (id) => Role.query().deleteById(id);
