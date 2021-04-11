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
          from: 'mst_user.role_id',
          to: 'mst_role.id'
        }
      }
    };
  }
}

module.exports = User;
