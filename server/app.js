require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT;
const postsRoutes = require("./routes/postsRoutes");

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.use("/", postsRoutes);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
