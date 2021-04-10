const BaseModel = require('.');

class JobProgress extends BaseModel {
  static get tableName() {
    return 'mst_job_status';
  }

  static get relationMappings() {
    // const Customer = require('./customer')
    return {
      // users : {
      //     relation: Model.BelongsToOneRelation,
      //     modelClass: Customer,
      //     join: {
      //         from: 'comment.customer_id',
      //         to: 'customer.id'
      //     }
      // }
    };
  }
}

module.exports = JobProgress;
