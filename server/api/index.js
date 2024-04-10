const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const blogRouter = require("../routes/blog-route");
require("../db");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", blogRouter);

app.use("/api", (req, res) => {
  res.json("Hello World");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(3001, () => console.log(`Server listening on port 3001...`));

module.exports = app;
