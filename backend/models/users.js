import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        minlenght: [3, 'first name is too short'],
    },
    last_name: {
        type: String,
        required: true,
        minlenght: [3, 'last name is too short'],
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        validate: {
            validator: function (value) {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return emailRegex.test(value)
            },
            message: 'Invalid email address format'
        }
        
    },
    password: {
        type: String,
        required: true,
        minlenght: [8, 'Password must be at least 8 characters long']
    },
    is_author: {
        type: Boolean,
        default: false
    },
    blogs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }
}, {timestamps: true})


const User = mongoose.model('User', UserSchema)

export default User