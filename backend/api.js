import express from 'express'
const route = express.Router()
import users from './routes/users.js'
import blogs from "./routes/blogs.js"
route.use('/user', users)
route.use('/blog', blogs)

export default route