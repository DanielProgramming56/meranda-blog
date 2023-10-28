import express from 'express'
import route from './api.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { errorResponseHandler, invalidPathResponseHandler } from './middlewares/errorResponseHandler.js'

// config
dotenv.config()
// Create Application
const app = express()
app.use(express.json());

// middleware
app.use('/api', route)
app.use(invalidPathResponseHandler)
app.use(errorResponseHandler)


// connect to Database 

mongoose.connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'the database is not connected'))

db.once('open', () => {
    console.log('You are connected to database')
})


app.listen(process.env.PORT, () => {
    console.log(`Your Port is hosted at localhost:${process.env.PORT}`)
})