const express = require("express");
const CityController = require("../../controllers/city-controller.js");
const router = express.Router();

router.post("/city", CityController.create);
router.get("/city/:cityId", CityController.getCityByCityId);
router.get("/city", CityController.getCities);
router.put("/city/:cityId", CityController.update);
router.delete("/city/:cityId", CityController.deleteCity);
module.exports = router;
