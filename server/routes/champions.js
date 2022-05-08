import express from "express";
import { getChampions, getSingleChampion } from "../controllers/champions.js";
const router = express.Router();

router.get("/", getChampions);
router.get("/:id", getSingleChampion);

export default router;
