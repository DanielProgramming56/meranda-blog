import  jwt  from "jsonwebtoken"
import User from "../models/users.js"
export const authGuard = async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token
            const token = req.headers.authorization.split(" ")[1]
            // get the id from token
            const { userId } = jwt.verify(token, process.env.TOKEN_KEY)

            // set the user by providing all info and deselete the password
            req.user = await User.findById(userId).select('-password')

            next()
        } catch (error) {
            let err = new Error('not authorized token failed')
            err.statusCode = 401
            next(err)
        }
    } else {
        let err = new Error('not authorized, no token')
        err.statusCode = 401
        next(err)
    }
} 