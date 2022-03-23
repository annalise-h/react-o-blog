require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT;
const postsRoutes = require("./routes/postsRoutes");
const { sequelize } = require("./models");

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.use("/", postsRoutes);

async function syncModels() {
  await sequelize.sync({ force: true });
}

syncModels();

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
