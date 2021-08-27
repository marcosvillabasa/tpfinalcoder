import express from 'express'
import path from 'path'
import * as http from 'http'

//routes
import apiRouter from '../routes'

const app = express()

const publicFolder = path.resolve(__dirname, '../../public')

app.use(express.static(publicFolder))

app.use(express.json())
app.use('/api', apiRouter)

const server = new http.Server(app)

export default server
