import mongoose from "mongoose";

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
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment', // Reference to the Comment model
      },
    ],
    likes: {
      type: Number,
      default: 0, // Initialize the number of likes to 0
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
    },
    image: String
  });
  
  const Blog = mongoose.model('Blog', BlogSchema);

  export default Blog
  