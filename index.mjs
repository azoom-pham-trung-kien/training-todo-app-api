import express from 'express'
const app = express()
const port = 3000
import { hello, greeting } from './router.mjs'

app.get('/hello', (req, res) => {
  res.send(hello(greeting))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
