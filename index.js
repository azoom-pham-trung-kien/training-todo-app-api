const express = require('express')
const app = express()
const port = 3000
const nnn = require('nnn-router')

const options = {
  routeDir: '/routes'
}

app.use(nnn(options))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
