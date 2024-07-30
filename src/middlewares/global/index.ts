import type {
  Request,
  Response,
  Router,
  ErrorRequestHandler,
  NextFunction
} from 'express'

const createGlobalMiddleWares = (router: Router) => {
  // app middleware
  router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
  // errorHandler middleware
  router.use(
    (
      err: ErrorRequestHandler,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      console.error(err)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  )
}

export default createGlobalMiddleWares
