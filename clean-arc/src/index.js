const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

// config env
dotenv.config();

const app = express();
//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cors
app.use(cors());
// enable logging
app.use(morgan("dev"));
// TODO: figure out DNT compliance.
app.use((_, res, next) => {
  res.set({ Tk: "!" });
  next();
});
// router setup
// require("../routers")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Sever is litening on port", PORT, "...");
});

