const express = require("express");
const cors = require("cors");
const blogRouter = require("./routes/blog-route");
require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", blogRouter);

app.use("/api", (req, res) => {
  res.json("Hello World");
});

app.listen(3000, () => console.log(`Server listening on port 3000...`));
