const { create } = require('../repositories/project');

exports.createProject = async (req, res, next) => {
  const { body } = req;
  try {
    const query = await create(body);
    res.send(query);
  } catch (error) {
    next(error);
  }
};
