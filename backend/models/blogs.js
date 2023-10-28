import mongoose from "mongoose";
import { Reviews } from "./reviewModels.js";
// Define the Blog schema
const BlogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
  },
  reviewsNumber: {
      type: Number,
  },
    reviews: [
      {type: mongoose.Schema.ObjectId, ref: Reviews}
    ],
    attr: [{
      key: {type: String},
      value : {type: String},
    }],
    // author: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User', // Reference to the User model
    // },
    image: [],

  });
  
  BlogSchema.index({name: "text", description: "text"}, {name: "TextIndex"})
  BlogSchema.index({"attr.key": 1, "attr.value": 1})
  const Blog = mongoose.model('Blog', BlogSchema);

  export default Blog
  