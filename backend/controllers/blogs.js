import Blog from "../models/blogs.js";

export const getAllBlogs =  async (req, res) => {
    try {
        const blogs = await Blog.find({})
    } catch (error) {
        
    }
}