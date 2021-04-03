const Customer = require('../../models/mstCustomer');
const Model = require('./model')

exports.findById = (id) =>{
    const data = Customer.query().findById(id) 
    return data 
}

exports.findAll = (pageSize,pageNumber,search) => {
    let data;
    if(search) {
        data = Customer.query().whereRaw('LOWER(name) LIKE ?', '%'+search.toLowerCase()+'%').page(pageNumber, pageSize);
    }else{
        data = Customer.query().page(pageNumber, pageSize);
    }
    return data
}

exports.insert = (data) => {
    const model = Model.customer(data)
    const query = Customer.query().insert(model);
    return query    
}

exports.update = (id,data) => {
    const model = Model.customer(data)
    const query = Customer.query()
    .findById(id)
    .patch(model);
    return query

}

exports.deleteData = (id) => {     
    return Customer.query().deleteById(id);
}