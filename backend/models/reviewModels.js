import { Model, Schema, model } from "mongoose";

const reviewsModel = Schema({
    comment: {
        type: String,
        require: true
    },
    rating: {
        type: String,
        require: true
    },
    user: {
        _id: {type: Schema.Types.ObjectId, require: true},
        name: {type: String, require: true}
    }
}, {timestamps: true} )

export const Reviews = model('Reviews', reviewsModel)
