const app = require("./app");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4546;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const server = app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`);
});

process.on("unhandledRejection", (error) => {
  server.close(() => {
    console.log("Cannot connect to database");
    console.log(error);
  });
});
