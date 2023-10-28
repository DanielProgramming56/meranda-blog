import express from "express"
import  {getAllBlogs}  from "../controllers/blogs.js"
const route = express.Router()

route.get('/',  getAllBlogs)

export default route