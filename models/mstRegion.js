const { Model } = require('objection');
const knex = require('../config/knex')

Model.knex(knex)

class Region extends Model {
    static get tableName() {
      return 'mst_region';
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
  
  module.exports = Region;