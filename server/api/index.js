const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const blogRouter = require("../routes/blog-route");
require("../db");

const app = express();

// Define an array of allowed origin domains
const allowedOrigins = ["http://localhost:5173"];

// Configure CORS middleware with allowed origins
app.use(
  cors({
    origin: (origin, callback) => {
      // Check if the request origin is in the allowed origins array
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error("Not allowed by CORS")); // Block the request
      }
    },
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

app.listen(process.env.PORT || 3001, () =>
  console.log(`Server listening on port ${process.env.PORT || 3001}...`)
);

module.exports = app;
