import express from 'express'
import route from './api.js'
// Create Application
const app = express()

app.use('/api', route)

app.listen(5000, () => {
    console.log(`Your Port is hosted at localhost:${5000}`)
})