import express from "express";
import {
  signIn,
  signUp,
  starGuide,
  unStarGuide,
  getUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/:id", getUser);
router.post("/signin", signIn);
router.post("/signup", signUp);
router.patch("/star/:id", starGuide);
router.patch("/unstar/:id", unStarGuide);

export default router;
