const BaseModel = require(".");

class Role extends BaseModel {
    static get tableName() {
      return 'mst_role';
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
        }
    }
  }
  
  module.exports = Role;