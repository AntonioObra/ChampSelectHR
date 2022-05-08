import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: String,

  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Review", reviewSchema);
