import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import cookieParser from 'cookie-parser'
import nnnRouter from 'nnn-router'
import statuses from 'statuses'
import swaggerUi from 'swagger-ui-express'

import swaggerConfig from '@/swagger.json' assert { type: 'json' }

import createGlobalMiddleWares from '@/middlewares/global'
import createRouteMiddleWare from '@/middlewares/routes'

// Customize express response
express.response.sendStatus = function (statusCode: number) {
  const body = { message: statuses(statusCode) || String(statusCode) }
  console.log('body', body)
  this.statusCode = statusCode
  this.type('json')
  this.send(body)
  return this
}

const app = express()
const PORT = process.env.PORT || 3000
const __dirname = path.resolve()
const router = express.Router()

// built in middleware
app.use(
  express.static(path.join(__dirname, 'src/public')),
  express.urlencoded({ extended: true, limit: '50mb' }),
  express.json({ limit: '10mb' }),
  express.text()
)

// Third-party middleware
app.use(
  cors(),
  cookieParser(),
  morgan(':method :url :date[iso]'),
  nnnRouter({
    routeDir: '/dist/routes',
    baseRouter: router
  })
)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))

createGlobalMiddleWares(router)
createRouteMiddleWare(router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
