import User from "../models/users.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const createNewUser = async (req, res, next) => {
        try {
                const { first_name, last_name, email, password } = req.body
                const userExist = await User.findOne({ email })
                const saltRound = 10
                const hashedPassword = await bcrypt.hash(password, saltRound)

                if (userExist) {
                        throw new Error('user already exist')
                }
                const newUser = new User({ first_name, last_name, email, password: hashedPassword })
                await newUser.save()
                res.status(201).json({ message: 'User created successfully', user: newUser })
        } catch (error) {
                next(error)
        }
}

export const loginUser = async (req, res, next) => {
        const { email, password } = req.body
        try {
                const userExist = await User.findOne({ email })

                if (!userExist) {
                        // res.status(400).json({ message: 'Invalid credentials' })
                        throw new Error('Invalid credentials')
                }

                const passwordMatch = await bcrypt.compare(password, userExist.password)

                if (!passwordMatch) {
                        throw new Error('Invalid credentials')
                }
                const token = jwt.sign({
                        userId: userExist._id, 
                        email: userExist.email
                }, process.env.TOKEN_KEY, { expiresIn: '1h' })
                res.status(200).json({ message: 'User created successfully', token: token });
        } catch (error) {
                next(error)
        }
}

export const userProfile = async (req, res, next) => {
        try {
                let user = await User.findById(req.user._id)

                if (user) {
                        return res.status(201).json({
                                _id: user._id,
                                avater: user.avatar,
                                name: user.first_name,
                                email: user.email,
                                admin: user.is_admin,
                                author: user.is_author
                        })
                }
                else {
                        let err = new Error('user not found')
                        err.statusCode = 404
                        next(err)
                }
        } catch (error) {
                next(error)
        }
}