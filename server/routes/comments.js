import express from "express";
import { createComment, deleteComment } from "../controllers/comments.js";

const router = express.Router();

router.post("/", createComment);
router.delete("/:id", deleteComment);

export default router;
