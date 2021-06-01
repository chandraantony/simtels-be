const Model = require('./model');
const TargetProject = require('../../models/mstTargetProject');

exports.findById = (id) => {
  const data = TargetProject.query().findById(id);
  return data;
};

exports.findAll = (pageSize, pageNumber, search) => {
  let data;
  if (search) {
    data = TargetProject.query().where('year', search).page(pageNumber, pageSize);
  } else {
    data = TargetProject.query().page(pageNumber, pageSize);
  }
  return data;
};

exports.insert = (data) => {
  const model = Model.targetProject(data);
  const query = TargetProject.query().insert(model);
  return query;
};

exports.update = (id, data) => {
  const model = Model.targetProject(data);
  const query = TargetProject.query()
    .findById(id)
    .patch(model);
  return query;
};

exports.deleteData = (id) => TargetProject.query().deleteById(id);

exports.findByDate = (month, year) => {
    console.log(month)
    console.log(year)
  const query = TargetProject.query().where('month', month).where('year', year);
  return query;
};
