const express = require("express");
const {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createNewPost);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
