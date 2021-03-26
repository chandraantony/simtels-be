const bcrypt = require('bcryptjs');
const saltRounds = 10;
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary')


//
const storage = new CloudinaryStorage({
    cloudinary: cloudinary.cloudinary,
    params: {
      folder: '/file/simtels',      
      resource_type : "raw",
      format:(req,file) => mimeType(req,file),
      public_id: (req, file) => fileName(req,file),
    }, 
});

const file = multer({storage : storage}).single('upload')

//

const paginate = (params) => {
    return {
        pageNo :  params.pageNo ? params.pageNo : 1,
        pageSize : params.pageSize ? params.pageSize : 5,
        search : params.search ? params.search : ''
    }
}


const salt = (val) => {
    return bcrypt.hashSync(val, saltRounds)
};
  
const compare = (val,hash) => {
    return bcrypt.compareSync(val, hash)
};

const fileName = (req,file) => {  
    var split = file.originalname.split('.')
    var name = split[0]+'-' + Date.now()
    return name
}

const mimeType = (req,file) => {
    console.log(file)
    var type = file.originalname.split('.')
    console.log(type[type.length-1])
    return type[type.length-1]
}

module.exports = {
    salt,
    paginate,
    fileName,
    file,
    compare,
}