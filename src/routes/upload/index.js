import upload from '../../upload/index.js'

const createUploadRoutes = router => {
  router.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file)
  })
}

export default createUploadRoutes
