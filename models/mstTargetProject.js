const BaseModel = require('.');

class TargetProject extends BaseModel {
  static get tableName() {
    return 'mst_target_project';
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

module.exports = TargetProject;
