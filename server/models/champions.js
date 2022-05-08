import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ChampionSchema = new Schema({
  name: String,
  icon: String,
  fullIcon: String,
  splashIcon: String,
  bannerIcon: String,
  squareIcon: String,
  tags: [],
  title: String,
  hp: Number,
  mp: Number,
  difficulty: Number,
  description: String,
  spells: [
    {
      spellName: String,
      name: String,
      description: String,
      icon: String,
      cost: String,
      range: String,
      cooldown: String,
    },
  ],
  passive: {
    name: String,
    description: String,
    icon: String,
  },
  builds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Build",
    },
  ],
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

export default mongoose.model("Champion", ChampionSchema);
