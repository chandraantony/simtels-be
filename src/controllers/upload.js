exports.upload = (req, res) => {
  res.json({
    sucess: true,
    message: 'Upload Success',
    url: req.file.path
  });
};
