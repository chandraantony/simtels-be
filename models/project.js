const BaseModel = require('.');

class Project extends BaseModel {
  static get tableName() {
    return 'project';
  }

  static get relationMappings() {
    const Detail = require('./detailPorject');
    return {
      detail_project: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Detail,
        join: {
          from: 'project.job_detail_id',
          to: 'project_detail.id'
        }
      }
    };
  }
}

module.exports = Project;
