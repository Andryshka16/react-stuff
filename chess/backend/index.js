import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { createServer } from 'http'
import { Server } from 'socket.io'

import usersRouter from './Routes/usersRouter.js'
import socketHandlers from './socket/socketHandlers.js'

const PORT = process.env.PORT || 4000

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/users', usersRouter)

const server = createServer(app)

const io = new Server(server, {
    cors: { origin: process.env.FRONTEND_URL, methods: ['GET', 'POST'] }
})

app.use('/*', (req, res) => {
    res.send("<h1>Server is working</h1>")
})

io.on('connection', socketHandlers)

mongoose.connect(process.env.MONGO_DB).then(() => console.log('Connected to database'))

server.listen(PORT, (error) => {
    if (error) {
        return console.log(error)
    }
    console.log('Server started!')
})
