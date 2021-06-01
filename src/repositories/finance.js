const Finance = require('../../models/finance');
const Model = require('./model');

exports.findById = (id) => {
  const data = Finance.query().findById(id);
  return data;
};

exports.findAll = (pageSize, pageNumber, search) => {
  let data;
  if (search) {
    data = Finance.query().whereRaw('LOWER(no_so) LIKE ?', `%${search.toLowerCase()}%`).page(pageNumber, pageSize);
  } else {
    data = Finance.query().page(pageNumber, pageSize);
  }
  return data;
};

exports.insert = (data) => {
  const model = Model.finance(data);
  const query = Finance.query().insert(model);
  return query;
};

exports.update = (id, data) => {
  const model = Model.finance(data);
  const query = Finance.query()
    .findById(id)
    .patch(model);
  return query;
};

exports.deleteData = (id) => Finance.query().deleteById(id);
