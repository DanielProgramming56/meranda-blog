import express from 'express'
const route = express.Router()
import users from './routes/users.js'
route.use('/user', users)

export default route