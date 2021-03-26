const { findAll, insert, update, deleteData, findById } = require("../repositories/region")
const makeResponse = require('../utils/response')

exports.getData = async (req,res,next) => {
    try {
        const id  = req.params.id
        const query = await findById(id)
        if(query){
            res.json(makeResponse.responseSuccesSingle(query))
        }
        res.json(makeResponse.resSuccessNotFound())
    } catch (error) {
        next(error)   
    }
}


exports.getListData = async (req,res,next) => {
    try {
        const size = req.query.size || 10
        const page = req.query.page > 0 ? parseInt(req.query.page)-1 : 0 || 0
        const search =  req.query.search
        const data = await findAll(size,page,search)
        res.json(makeResponse.responseSuccesList(data))
    } catch (error) {
        next(error)   
    }
}

exports.create = async (req,res,next) => {
    try {
        const request = req.body
        const query = await insert(request)
        res.json(query)
    } catch (error) {
        next(error)
    }

}

exports.update = async (req,res,next) => {
    try {
        const request = req.body
        const id = req.params.id
        const query = await update(id,request)
        res.json({
            msg : 'update'
        })
    } catch (error) {
        next(error)
    }

}

exports.delete = async(req,res,next) => {
    try {
        const id = req.params.id
        const query = await deleteData(id)
        console.log(query)
    } catch (error) {
        next(error)
    }
    res.json({
        msg : 'delete'
    })
}