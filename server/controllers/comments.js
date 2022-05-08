import Build from "../models/builds.js";
import mongoose from "mongoose";
import User from "../models/users.js";
import Review from "../models/review.js";

export const createComment = async (req, res) => {
  const comm = req.body.comment;
  console.log(req.body);
  const user = await User.findById(req.body.user.result._id);
  console.log(user);
  const build = await Build.findById(req.body._id);
  const comment = new Review({ comment: comm, author: user._id });
  console.log(comment);
  build.reviews.push(comment);
  await comment.save();
  await build.save();
  res.json({ message: "Comment added successfully" });
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Review.findByIdAndDelete(id);
};
