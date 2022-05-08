import mongoose from "mongoose";
import Champion from "../models/champions.js";

export const getChampions = async (req, res) => {
  try {
    const champions = await Champion.find();
    res.status(200).json(champions);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getSingleChampion = async (req, res) => {
  const { id } = req.params;
  const champion = await Champion.findById(id)
    .populate("builds")
    .populate({
      path: "builds",
      populate: { path: "user" },
    });
  try {
    res.status(200).json(champion);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
