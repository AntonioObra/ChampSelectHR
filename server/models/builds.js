import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BuildSchema = new Schema({
  name: String,
  role: {},
  champion: String,
  icon: String,
  runeSets: [],
  itemSets: [],
  spellsSets: [],
  description: String,
  synergieChampions: [],
  threatChampions: [],
  abilitySets: [],
  champions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Champion",
    },
  ],
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Build", BuildSchema);
