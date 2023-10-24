import mongoose from "mongoose";

export const connectToDataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        const db = mongoose.connection

        db.on('error', console.error.bind(console, 'the database is not connected'))

        db.once('open', () => {
            console.log('You are connected to database')
        })
    } catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}