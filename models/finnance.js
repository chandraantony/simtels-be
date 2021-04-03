const BaseModel = require(".");

class Finnance extends BaseModel {
    static get tableName() {
      return 'finnance';
    }
  
    static get relationMappings() {
        // const Detail = require('./detailPorject')
        return {
            // users : {
            //     relation: BaseModel.BelongsToOneRelation,
            //     modelClass: Detail,
            //     join: {
            //         from: 'project.job_detail_id',
            //         to: 'project_detail.id'
            //     }
            // }
        }
    }
  }
  
  module.exports = Finnance;