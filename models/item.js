const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Description can not be more than 500 characters"],
  },
  category: {
    type: String,
    required: [true, "Please add a category"],
    maxlength: [50, "Category can not be more than 50 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please add a price"],
    maxlength: [50, "Price can not be more than 50 characters"],
  },
  numberInStock: {
    type: Number,
    required: [true, "Please add a number in stock"],
    maxlength: [50, "Number in stock can not be more than 50 characters"],
  },
  url: {
    type: String,
    required: [true, "Please add a url"],
    maxlength: [50, "Url can not be more than 50 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Item", itemSchema);
