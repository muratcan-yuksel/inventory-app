require("dotenv").config();
require("express-async-errors");
const express = require("express");
const itemsRouter = require("./routes/items");
const cors = require("cors");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

require("express-async-errors");

const app = express();

// Serve static assets from the 'public' directory
app.use(express.static("./public/images"));

// Enable CORS for all routes
app.use(cors());

const connectDB = require("./db/connect");

// middleware
app.use(express.json());

// routes

app.use("/api/v1/items", itemsRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});
//these should be here, after app.get and app.use
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
