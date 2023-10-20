import express from 'express'
import { createNewUser } from '../controllers/users.js'
const users = express.Router()

users.get('/', createNewUser)

export default users