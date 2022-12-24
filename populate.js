const jsonProducts = require("./items.json");
require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/Item");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    const products = jsonProducts.map((product) => {
      return {
        ...product,
        image: product.image,
      };
    });
    await Product.create(products);
    console.log("Success!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
