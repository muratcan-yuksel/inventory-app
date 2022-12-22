require("dotenv").config();
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const app = express();

// const connectDB = require("./db/connect");
// const itemsRouter = require('./routes/items');

// const notFoundMiddleware = require('./middleware/not-found');
// const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

// routes

// app.use('/api/v1/items', itemsRouter);

// app.use(notFoundMiddleware);
// app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
