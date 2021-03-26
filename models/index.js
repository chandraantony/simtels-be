const { Model } = require('objection');
const knex = require('../config/knex')
const moment = require('moment')

Model.knex(knex)

class BaseModel extends Model {
  $beforeUpdate() {
    this.updated_at = moment().format();   
  }
  $beforeInsert() {
    this.created_at = moment().format();
  }
}

module.exports = BaseModel;