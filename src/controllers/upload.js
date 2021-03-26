exports.upload = (req,res,next) => {
    console.log(req.file)
    res.json({
        sucess : true,
        message : 'Upload Success',
        url : req.file.path
    })
}

