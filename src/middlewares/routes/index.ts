import type { Request, Response, Router, NextFunction } from 'express'

const createRouteMiddleWare = (router: Router) => {
  // router middleware
  router.use('/news', (req: Request, res: Response, next: NextFunction) => {
    console.log('News middleware')
    next()
  })
}

export default createRouteMiddleWare
