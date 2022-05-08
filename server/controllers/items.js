import Item from "../models/items.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).json(items);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
