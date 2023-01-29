require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");

const { PORT } = process.env;

app.use(express.json());
app.use(morgan("dev"));
app.set("view engine", "ejs");

// Routes

// Home Route
app.get("/", (req, res) => {
  res.render("welcome");
});

app.get("/login", (req, res) => {
  res.render("auth/login");
});

app.get("/register", (req, res) => {
  res.render("auth/register");
});

// Error Handling
// 404 Not Found
app.use((err, req, res, next) => {
  return res.status(404).json({
    status: false,
    message: "are you lost?",
    data: null,
  });
});

// 500 Internal Server Error
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: false,
    message: `internal server error ${err.message}`,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`running on ${PORT}, http://localhost:${PORT}`);
});
