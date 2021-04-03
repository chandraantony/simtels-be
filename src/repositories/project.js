const { transaction } = require('objection');
const Project = require('../../models/project');
const DetailProject = require('../../models/detailPorject');
const model = require('./model');

exports.create = (data, detail) => {
  try {
    const query = transaction(Project, DetailProject, async (Project, DetailProject) => {
      const project = await Project.query().insert();
      console.log(project);
      detail.id = project.id;
      const detailProject = await DetailProject.query().insert(detail);
      return true;
    });
    return query;
  } catch (error) {
    console.log(error);
    return error;
  }
};
