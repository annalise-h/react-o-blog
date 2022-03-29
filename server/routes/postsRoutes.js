const express = require("express");
const router = express.Router();
const { Post } = require("../models");

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (e) {
    console.log(e);
  }
});

router.post("/posts", async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = await Post.create({ title, content });
    res.status(200).json(post);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
