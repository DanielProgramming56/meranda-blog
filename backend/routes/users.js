import express from 'express'
import { createNewUser, loginUser, userProfile } from '../controllers/users.js'
import { authGuard } from '../middlewares/authGuard.js'
const users = express.Router()

users.post('/sign-up', createNewUser)
users.post('/login', loginUser)
users.get('/profile', authGuard, userProfile)
export default users