import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: String,
  description: String,
  tags: [],
  icon: String,
  basePrice: Number,
  sellPrice: Number,
  builds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Build",
    },
  ],
});

export default mongoose.model("Item", ItemSchema);
