const createRouteMiddleWare = router => {
  // router middleware
  router.use('/news', (req, res, next) => {
    console.log('News middleware')
    next()
  })
}

export default createRouteMiddleWare
