const { transaction } = require('objection');
const Project = require('../../models/project');
const DetailProject = require('../../models/detailPorject');
const model = require('./model');

exports.create = (data, detail) => {
  try {
    const query = transaction(Project, DetailProject, async (Project, DetailProject) => {      
      const detailProject = await DetailProject.query().insert(detail);
      data["job_detail_id"] = detailProject.id;
      const project = await Project.query().insert(model.project(data));
      return Project.query().findById(project.id).withGraphJoined('detail_project');
    });
    return query;
  } catch (error) {
    return error;
  }
};

exports.update = (data) => {
    try {
        const query = transaction(Project, DetailProject, async (Project, DetailProject) => {      
            await Project.query().findById(data.id).patch(model.project(data));
            await DetailProject.query().findById(data.detail_project.id).patch(model.detailProject(data.detail_project))
            return true
          });
          return query;    
    } catch (error) {
        return error
    }
}


exports.deleteData = (id) => {
    return Project.query().deleteById(id)
}

exports.findById = (id) => {
    return Project.query().findById(id)
}

exports.findAll = () => {
    return Project.query().withGraphFetched('detail_project')
}