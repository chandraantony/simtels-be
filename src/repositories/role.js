const Services = require('../../models/mstServices');
const Model = require('./model')

exports.findById = (id) =>{
    const data = Services.query().findById(id) 
    return data 
}

exports.findAll = (pageSize,pageNumber,search) => {
    let data;
    if(search) {
        data = Services.query().whereRaw('LOWER(name) LIKE ?', '%'+search.toLowerCase()+'%').page(pageNumber, pageSize);
    }else{
        data = Services.query().page(pageNumber, pageSize);
    }
    return data
}

exports.insert = (data) => {
    const model = Model.services(data)
    const query = Services.query().insert(model);
    return query    
}

exports.update = (id,data) => {
    const model = Model.services(data)
    const query = Services.query()
    .findById(id)
    .patch(model);
    return query

}

exports.deleteData = (id) => {     
    return Services.query().deleteById(id);
}