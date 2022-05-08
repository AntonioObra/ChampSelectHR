import express from "express";
import {
  getGuides,
  createGuide,
  getSingleGuide,
  deleteGuide,
  updateGuide,
} from "../controllers/guides.js";

const router = express.Router();

router.get("/", getGuides);
router.get("/:id", getSingleGuide);
router.post("/", createGuide);
router.patch("/:id", updateGuide);
router.delete("/:id", deleteGuide);

export default router;
