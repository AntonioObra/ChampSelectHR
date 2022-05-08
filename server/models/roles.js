import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  role: String,
  champions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Champion",
    },
  ],
  builds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Build",
    },
  ],
});

export default mongoose.model("Role", RoleSchema);
