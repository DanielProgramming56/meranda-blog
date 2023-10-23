import User from "../models/users.js";
import bcrypt from 'bcrypt' 
export const createNewUser = async (req, res, next) => {
        try {
                const { first_name, last_name, email, password } = req.body
                const userExist = await User.findOne({ email })
                const saltRound = 10
                const hashedPassword = await bcrypt.hash(password, saltRound)

                if (userExist) {
                        res.status(400).json({ message: 'User already exists, please sign in instead' })
                        return
                }
                const newUser = new User({ first_name, last_name, email, password: hashedPassword })
                await newUser.save()
                res.status(201).json({ message: 'User created successfully', user: newUser })
        } catch (error) {
                res.status(500).json({ message: error.message })
        }
}

export const getAllUsers = (req, res) => {
        try {
                res.status(200).json({ message: 'User created successfully' });
        } catch (error) {
                console.log(error.message)
        }
}