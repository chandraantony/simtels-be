exports.upload = (req, res) => {
  console.log(req.file);
  res.json({
    sucess: true,
    message: 'Upload Success',
    url: req.file.path
  });
};
