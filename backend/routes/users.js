import express from 'express'
import { createNewUser, loginUser } from '../controllers/users.js'
const users = express.Router()

users.post('/sign-up', createNewUser)
users.post('/login', loginUser)

export default users