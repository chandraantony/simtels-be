const Region = require('../../models/mstRegion');
const Model = require('./model')

exports.findById = (id) =>{
    const data = Region.query().findById(id) 
    return data 
}

exports.findAll = (pageSize,pageNumber,search) => {
    let data;
    if(search) {
        data = Region.query().whereRaw('LOWER(name) LIKE ?', '%'+search.toLowerCase()+'%').page(pageNumber, pageSize);
    }else{
        data = Region.query().page(pageNumber, pageSize);
    }
    return data
}

exports.insert = (data) => {
    const model = Model.region(data)
    const query = Region.query().insert(model);
    return query    
}

exports.update = (id,data) => {
    const model = Model.region(data)
    const query = Region.query()
    .findById(id)
    .patch(model);
    return query

}

exports.deleteData = (id) => {     
    return Region.query().deleteById(id);
}