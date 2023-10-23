import express from 'express'
import { createNewUser, getAllUsers } from '../controllers/users.js'
const users = express.Router()

users.post('/', createNewUser)
users.get('/', getAllUsers)

export default users