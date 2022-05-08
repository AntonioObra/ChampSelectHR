import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  userName: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  starGuides: [
    {
      type: Schema.Types.ObjectId,
      ref: "Build",
    },
  ],
  guides: [
    {
      type: Schema.Types.ObjectId,
      ref: "Build",
    },
  ],
});

export default mongoose.model("User", userSchema);
