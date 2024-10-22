import "dotenv/config.js"
import "./config/database.js"
import cors from 'cors'
import morgan from 'morgan'
import indexRouter from './routers/index.js'
import express from "express"
import error_404_handler from "./middlewares/error_404_handler.js"
import error_handler from "./middlewares/error_handler.js"


const server = express()
const PORT = process.env.PORT || 8085
const ready = () => console.log("server ready in port: " + PORT)
server.listen(PORT, ready)
console.log(process.env)

server.use(express.json()) //permite trabajar con formato .json en entrada y salida
server.use(express.urlencoded({ extended: true })) 
server.use(cors()) //permite el uso de cors
server.use(morgan('dev'))

server.use('/api', indexRouter) //Router
server.use(error_404_handler)
server.use(error_handler)