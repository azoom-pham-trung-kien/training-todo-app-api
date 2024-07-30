import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import cookieParser from 'cookie-parser'
import nnnRouter from 'nnn-router'

import createGlobalMiddleWares from '@/middlewares/global'
import createRouteMiddleWare from '@/middlewares/routes'

const app = express()
const PORT = process.env.PORT || 3000
const __dirname = path.resolve()
const router = express.Router()

// Third-party middleware
app.use(cors(), cookieParser(), morgan(':method :url :date[iso]'),   nnnRouter({
  routeDir: '/dist/routes',
  baseRouter: router
}))

// built in middleware
app.use(
  express.static(path.join(__dirname, 'src/public')),
  express.urlencoded({ extended: true, limit: '50mb' }),
  express.json({ limit: '10mb' }),
  express.text()
)

createGlobalMiddleWares(router)
createRouteMiddleWare(router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
