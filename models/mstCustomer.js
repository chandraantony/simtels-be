const BaseModel = require(".");

class Customer extends BaseModel {
    static get tableName() {
      return 'mst_customer';
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
  
  module.exports = Customer;