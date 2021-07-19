const {
  create, deleteData, findAll, findById, update, projectPerYear, projectTarget, projectMonthly, updateInsternalUser
} = require('../repositories/project');
const makeResponse = require('../utils/response');

exports.perYear = async (req, res, next) => {
  try {
    const { year } = req.params;
    const query = await projectPerYear(year);
    // console.log(query);
    res.send(query);
  } catch (error) {
    next(error);
  }
};

exports.createProject = async (req, res, next) => {
  const project = req.body;
  const { job_detail } = project;
  try {
    const query = await create(project, job_detail);
    const setInternalUser = await updateInsternalUser(query.id)
    console.log(query.id)
    res.send(makeResponse.resSuccessCreate('Data created', query));
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const query = await findById(id);
    if (query) {
      res.send(makeResponse.responseSuccesSingle(query));
    } else {
      res.send(makeResponse.resFailNotFound('Data not found'));
    }
  } catch (error) {
    next(error);
  }
};

exports.getList = async (req, res, next) => {
  try {
    const size = req.query.size || 10;
    const page = req.query.page > 0 ? parseInt(req.query.page) - 1 : 0 || 0;
    const keyword = req.query.search ? req.query.search : '';
    const query = await findAll(size, page, keyword);
    res.send(makeResponse.responseSuccesList(query));
  } catch (error) {
    next(error);
  }
};

exports.deleteById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const query = await deleteData(id);
    if (query) {
      res.send(makeResponse.resSuccess('Deleted succesfully'));
    } else {
      res.send(makeResponse.resFailNotFound('Data not found'));
    }
  } catch (error) {
    next(error);
  }
};

exports.updateProject = async (req, res, next) => {
  const { body } = req;
  try {
    const query = await update(body);
    if (query) {
      res.json(makeResponse.resSuccess('Data Updated'));
    } else {
      res.json(makeResponse.resSuccessNotFound());
    }
  } catch (error) {
    console.log(error)
    next(error);
  }
};

exports.projectPerMonth = async (req, res, next) => {
  const {month,year} = req.query
  console.log(month, year)
  try {
    const query = await projectMonthly(year, month)
    res.send(query)
  } catch (error) {
    next(error)
  }
}

exports.chartData = async (req, res, next) => {
  const { year } = req.query
  try {
    const query = await projectTarget(year)
    res.send(query)
  } catch (error) {
    next(error)
  }
}
