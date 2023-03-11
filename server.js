const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors(
  {
    origin : '*'
  }
));
//password - o2DJPbABHlKVyQ1B
// const uri = `mongodb+srv://cluster0-todomean.guh5yzr.mongodb.net/todosdb" --apiVersion 1 --username yogendra55`
const uri = `mongodb+srv://yogendra55:o2DJPbABHlKVyQ1B@cluster0-todomean.guh5yzr.mongodb.net/todosDB?retryWrites=true&w=majority`
// Database connection
//"mongodb://127.0.0.1:27017/todosdb"
mongoose
  .connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OK");
  })
  .catch((err) => {
    console.log("CONNECTION IS BAD");
    console.log(err);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/todos", todoRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
