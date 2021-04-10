const BaseModel = require('.');

class User extends BaseModel {
  static get tableName() {
    return 'mst_user';
  }

  static get relationMappings() {
    const Role = require('./mstRole');
    return {
      role_detail: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Role,
        join: {
          from: 'comment.customer_id',
          to: 'customer.id'
        }
      }
    };
  }
}

module.exports = User;
