const JobProgress = require('../../models/mstStatus');
const Model = require('./model')

exports.findById = (id) =>{
    const data = JobProgress.query().findById(id) 
    return data 
}

exports.findAll = (pageSize,pageNumber,search) => {
    let data;
    if(search) {
        data = JobProgress.query().whereRaw('LOWER(name) LIKE ?', '%'+search.toLowerCase()+'%').page(pageNumber, pageSize);
    }else{
        data = JobProgress.query().page(pageNumber, pageSize);
    }
    return data
}

exports.insert = (data) => {
    const model = Model.jobProgress(data)
    const query = JobProgress.query().insert(model);
    return query    
}

exports.update = (id,data) => {
    const model = Model.jobProgress(data)
    const query = JobProgress.query()
    .findById(id)
    .patch(model);
    return query

}

exports.deleteData = (id) => {     
    return JobProgress.query().deleteById(id);
}