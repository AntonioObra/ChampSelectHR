import Build from "../models/builds.js";
import Champion from "../models/champions.js";
import mongoose from "mongoose";
import Item from "../models/items.js";
import User from "../models/users.js";

export const getGuides = async (req, res) => {
  try {
    const guides = await Build.find().populate("user");

    res.status(200).json(guides);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createGuide = async (req, res) => {
  const guide = req.body;
  const champion = await Champion.findOne({ name: guide.champion });
  const user = await User.findOne({ userName: guide.user.result.userName });
  const newGuide = new Build({ ...guide, icon: champion.icon });

  champion.builds.push(newGuide);
  newGuide.champions.push(champion);

  newGuide.user = user._id;

  user.guides.push(newGuide);

  try {
    await newGuide.save();
    await champion.save();
    await user.save();
    res.status(201).json({ newGuide });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getSingleGuide = async (req, res) => {
  const { id } = req.params;
  const guide = await Build.findById(id)
    .populate("champions")
    .populate("items")
    .populate("user")
    .populate({ path: "reviews", populate: { path: "author" } });
  try {
    res.status(200).json({ guide });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteGuide = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  await Build.findByIdAndRemove(id);

  res.json({ message: "Guide deleted successfully!" });
};

export const updateGuide = async (req, res) => {
  const guide = await Build.findByIdAndUpdate(req.body.id, {
    ...req.body.guide,
  });

  await guide.save();

  res.json({ message: "Guide updated successfully!" });
};
