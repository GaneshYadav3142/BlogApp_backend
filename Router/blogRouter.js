const express=require("express");
const Blog = require("../Model/blogSchema");

const blogRouter=express.Router()


// blogRouter.get("/",async(req,res)=>{
//     try {
//         // Fetch all blog posts from the database
//         const blogs = await Blog.find();
//         res.status(200).json(blogs);
//       } catch (error) {
//         res.status(500).json({ error: error.message });
//       }
// })


blogRouter.post("/",async(req,res)=>{
    console.log('Create blog route accessed.')
   
  
    try {
     const blog= await Blog.create(req.body);
      blog.save()
      res.status(201).json({ message: 'Blog created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  blogRouter.get("/", async (req, res) => {
    try {
     
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });










module.exports=blogRouter