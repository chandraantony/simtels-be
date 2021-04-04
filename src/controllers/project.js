const { create, deleteData, findAll, findById, update } = require('../repositories/project');
const makeResponse = require('../utils/response');

exports.createProject = async (req, res, next) => {
  const  project  = req.body;
  const { job_detail } = project; 
  try {
    const query = await create(project,job_detail);
    res.send(makeResponse.resSuccessCreate("Data created",query));
  } catch (error) {
    next(error);
  }
};

exports.getById = async(req,res,next) => {
    const { id } = req.params
    try {
        const query = await findById(id)
        if(query){
            res.send(makeResponse.responseSuccesSingle(query))
        }else{
            res.send(makeResponse.resFailNotFound("Data not found"))
        }
    } catch (error) {
        next(error)
    }
}

exports.getList = async (req,res,next) => {
    try {
        const query = await findAll()
        res.send(makeResponse.responseSuccesList(query))
    } catch (error) {
        next(error)
    }
}

exports.deleteById = async (req,res,next) =>{
    const { id }  = req.params
    try {
        const query = await deleteData(id)
        if(query){
            res.send(makeResponse.resSuccess("Deleted succesfully"))
        }else{
            res.send(makeResponse.resFailNotFound("Data not found"))
        } 
    } catch (error) {
        next(error)
    }
}


exports.updateProject = async (req,res,next) => {
    try {
        
    } catch (error) {
      next(error)       
    }
}