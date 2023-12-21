const { AirportService } = require("../services/index.js");

const airportService = new AirportService();
const create = async (req, res, next) => {
  try {
    const airport = await airportService.create(req.body);
    res.json({
      success: true,
      message: "Airport created successfully",
      data: airport,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error creating airports",
      data: {},
      err: error,
    });
  }
};
module.exports = {
  create,
};
