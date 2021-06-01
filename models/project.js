const BaseModel = require('.');
const JobProgress = require('./mstStatus');

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
      },
      job_status_project: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: JobProgress,
        join: {
          from: 'project.job_status_id',
          to: 'mst_job_status.id'
        }
      }
    };
  }
}

module.exports = Project;
