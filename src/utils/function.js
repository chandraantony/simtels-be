const bcrypt = require('bcryptjs');

const saltRounds = 10;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

//

const fileName = (req, files) => {
  const split = files.originalname.split('.');
  const name = `${split[0]}-${Date.now()}`;
  return name;
};

const mimeType = (req, files) => {
  const type = files.originalname.split('.');
  return type[type.length - 1];
};

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.cloudinary,
  params: {
    folder: '/file/simtels',
    resource_type: 'raw',
    format: (req, file) => mimeType(req, file),
    public_id: (req, file) => fileName(req, file),
  },
});

const file = multer({ storage }).single('upload');

//

const paginate = (params) => ({
  pageNo: params.pageNo ? params.pageNo : 1,
  pageSize: params.pageSize ? params.pageSize : 10,
  search: params.search ? params.search : ''
});

const salt = (val) => bcrypt.hashSync(val, saltRounds);

const compare = (val, hash) => bcrypt.compareSync(val, hash);

module.exports = {
  salt,
  paginate,
  fileName,
  file,
  compare,
};
