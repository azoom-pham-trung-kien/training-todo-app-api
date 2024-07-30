import upload from '@/upload'
import type { Router } from 'express'

const createUploadRoutes = (router: Router) => {
  router.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      return next(error)
    }

    res.send(file)
  })
}

export default createUploadRoutes
