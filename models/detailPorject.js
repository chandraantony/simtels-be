const BaseModel = require('.');

class DetailProject extends BaseModel {
  static get tableName() {
    return 'project_detail';
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

module.exports = DetailProject;
