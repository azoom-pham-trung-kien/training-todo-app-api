import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import path from 'path'
import cookieParser from 'cookie-parser'

import createRoutes from '@/routes'
import createGlobalMiddleWares from '@/middlewares/global'
import createRouteMiddleWare from '@/middlewares/routes'

const app = express()
const PORT = process.env.PORT || 3000
const __dirname = path.resolve()
const router = express.Router()

// Third-party middleware
app.use(cors(), cookieParser(), morgan('dev'))

app.use('/', router)
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'src/resources/views'))

// built in middleware
app.use(
  express.static(path.join(__dirname, 'src/public')),
  express.urlencoded({ extended: true, limit: '50mb' }),
  express.json({ limit: '10mb' }),
  express.text()
)

createGlobalMiddleWares(router)
createRouteMiddleWare(router)

createRoutes(router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
