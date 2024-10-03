import { Router } from "express";
import { PostController } from "../controllers/postController";

const router = Router();

router.get("/posts", PostController.getAllPosts);
router.get("/posts/:id", PostController.getPostById);
router.post("/posts", PostController.createPost);

export default router;
