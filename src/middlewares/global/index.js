const createGlobalMiddleWares = router => {
  // app middleware
  router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
  // errorHandler middleware
  router.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error' })
  })
}

export default createGlobalMiddleWares
