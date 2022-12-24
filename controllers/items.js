const Item = require("../models/Item");
const asyncWrapper = require("../middleware/async");

const getAllItems = asyncWrapper(async (req, res) => {
  const items = await Item.find();
  res.status(200).json({ items });
});

const getItem = asyncWrapper(async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ msg: `No item with id ${req.params.id}` });
  }
  res.status(200).json({ item });
});

const createItem = asyncWrapper(async (req, res) => {
  const item = await Item.create(req.body);
  res.status(201).json({ item });
});

const updateItem = asyncWrapper(async (req, res) => {
  const item = await Item.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!item) {
    return res.status(404).json({ msg: `No item with id ${req.params.id}` });
  }
  res.status(200).json({ item });
});

const deleteItem = asyncWrapper(async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) {
    return res.status(404).json({ msg: `No item with id ${req.params.id}` });
  }
  res.status(200).json({ msg: `Item with id ${req.params.id} was deleted` });
});

module.exports = {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
