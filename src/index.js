const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig.js");

const CityRepository = require("./respository/city-respository.js");

const setupAndStartServer = async () => {
  const app = express();
  const port = PORT || 4000;
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(port, async () => {
    console.log(`Server listening on port ${port}`);
    const repo = new CityRepository();
    try {
      const creates = await repo.createCity({ name: "Hanoi" });
    } catch (error) {
      console.log(error);
    }
  });
};

setupAndStartServer();
