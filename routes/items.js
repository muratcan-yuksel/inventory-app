const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");

router.route("/").get(getAllItems).post(createItem);

router.route("/:id").get(getItem).patch(updateItem).delete(deleteItem);

module.exports = router;
