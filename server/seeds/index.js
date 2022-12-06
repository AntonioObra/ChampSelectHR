import mongoose from "mongoose";
import Champion from "../models/champions.js";
import roles from "./roleseed.js";
import Role from "../models/roles.js";
import items from "./itemsSeeds.js";
import Item from "../models/items.js";
import Build from "../models/builds.js";
import champions from "./championFullseeds/championFull.js";

import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.DB_URL;

//povezivanje na bazu
mongoose.connect(
  "mongodb+srv://antonioobra:pTljapr2xnpMfemN@cluster0.oaaqjsd.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//pregledava jeli povezana baza
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB connected!");
});

const seedDB = async () => {
  await Champion.deleteMany({});
  await Item.deleteMany({});
  await Build.deleteMany({});
  await Role.deleteMany({});
  for (let champion in champions.data) {
    const champData = champions.data[champion];
    const champ = new Champion({
      name: `${champData.name}`,
      title: `${champData.title}`,
      // icon: `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${champData.image.full}`,
      icon: `https://www.mobafire.com/images/champion/card/${champData.id.toLowerCase()}.jpg`,
      fullIcon: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champData.skins[0].icon}`,
      splashIcon: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champData.skins[0].icon}`,
      bannerIcon: `https://www.mobafire.com/images/champion/banner/${champData.id.toLowerCase()}.jpg`,
      squareIcon: `https://www.mobafire.com/images/champion/square/${champData.id.toLowerCase()}.png`,
      hp: champData.stats.hp,
      mp: champData.stats.mp,
      difficulty: champData.info.difficulty,
      description: `${champData.lore}`,
      tags: ["All", champData.tags[0]],
      spells: [
        {
          spellName: "Q",
          name: `${champData.spells[0].name}`,
          description: `${champData.spells[0].description}`,
          icon: `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${champData.spells[0].image.full}`,
          cost: champData.spells[0].costBurn,
          range: champData.spells[0].rangeBurn,
          cooldown: champData.spells[0].cooldownBurn,
        },
        {
          spellName: "W",
          name: `${champData.spells[1].name}`,
          description: `${champData.spells[1].description}`,
          icon: `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${champData.spells[1].image.full}`,
          cost: champData.spells[1].costBurn,
          range: champData.spells[1].rangeBurn,
          cooldown: champData.spells[1].cooldownBurn,
        },
        {
          spellName: "E",
          name: `${champData.spells[2].name}`,
          description: `${champData.spells[2].description}`,
          icon: `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${champData.spells[2].image.full}`,
          cost: champData.spells[2].costBurn,
          range: champData.spells[2].rangeBurn,
          cooldown: champData.spells[2].cooldownBurn,
        },
        {
          spellName: "R",
          name: `${champData.spells[3].name}`,
          description: `${champData.spells[3].description}`,
          icon: `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${champData.spells[3].image.full}`,
          cost: champData.spells[3].costBurn,
          range: champData.spells[3].rangeBurn,
          cooldown: champData.spells[3].cooldownBurn,
        },
      ],
      passive: {
        name: `${champData.passive.name}`,
        description: `${champData.passive.description}`,
        icon: `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/passive/${champData.passive.image.full}`,
      },
    });
    await champ.save();
  }
  for (let i = 0; i < roles.length; i++) {
    const role = new Role({
      role: `${roles[i].role}`,
    });
    await role.save();
  }
  for (let i = 0; i < items.length; i++) {
    const item = new Item({
      name: `${items[i].name}`,
      description: `${items[i].plaintext}`,
      tags: ["All", ...items[i].tags],
      icon: `${items[i].image.full}`,
      basePrice: items[i].gold.total,
      sellPrice: items[i].gold.sell,
    });
    await item.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
