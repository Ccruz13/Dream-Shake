const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});