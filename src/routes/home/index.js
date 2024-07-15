const createHomeRoutes = router => {
  router.get('/', (request, response) => {
    return response.render('home', {
      showTitle: true,
      // Override `foo` helper only for this rendering.
      helpers: {
        foo() {
          return 'foo.'
        },
        bar() {
          return 'bar'
        }
      }
    })
  })
}

export default createHomeRoutes
