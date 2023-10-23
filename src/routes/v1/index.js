
const express= require("express");

const CityController=require("../../controllers/city-controller.js")

const router= express.Router();

router.post("/city",CityController.create);
router.get("/city",CityController.get);
router.put("/city/:id",CityController.update);
router.delete("/city/:id",CityController.destroy);

module.exports=router;